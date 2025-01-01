import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';
import Shape from './../components/Shape';
import './Homepage.css';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function HomepageText() {
    return (
        <div id='text-container'>
            <span id='header'>To A Better Future For Humanity.</span>
            <span id='subheader'>Maxwell J. Chen</span>
        </div>
    )
}

function sampleShape(key) {
    // geometry
    let geometry = 'box';

    // dimensions
    let dim = Math.random() * 0.25 + 0.5;
    let dims = [dim, dim, dim];

    // wireframe
    let wireframe = Math.random() > 0.5;

    // rotations
    let rotations = Array(3).fill().map(() => Math.random() * 3);
    rotations[Math.floor(Math.random() * 3)] = 0;

    // speed
    // let speed = Math.random() * 0.002 + 0.003;
    let speed = 0.005;

    // position
    let position = [Math.random() * 5 - 2.5, 3, 0];

    // color
    const colors = [0xe06666, 0x93c47d, 0x6d9eeb];
    let color = colors[Math.floor(Math.random() * 3)];

    // console.log(geometry);
    // console.log(dims);
    // console.log(color);
    // console.log(rotations);
    // console.log(speed);
    // console.log(position);
    // console.log(wireframe);

    return (
        <Shape geometry={geometry} dims={dims} color={color} rotations={rotations} speed={speed} position={position} wireframe={wireframe} key={key} />
    )
}

function HomepageCanvas() {
    const [shapes, setShapes] = useState([sampleShape(0)]);

    useInterval(() => {
        if(shapes.length >= 10)
            setShapes(shapes.slice(1, 10));
        setShapes([...shapes, sampleShape(shapes.length)]);
    }, 1000);

    return (
        <Canvas camera={{ fov: 15, near: 0.1, far: 1000, position: [0, 0, 15] }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 2, 2]} castShadow={true} intensity={Math.PI * 2} />
            {shapes}
        </Canvas>
    )
}

function Homepage() {
    return (
        <div>
            <HomepageText />
            <HomepageCanvas />
            <div id='gradient' />
        </div>
    )
}

export default Homepage;