import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';
import { sampleShape } from './../components/Shape';
import './Homepage.css';

function HomepageText() {
    return (
        <div id='text-container'>
            <span id='header'>To A Better Future For Humanity.</span>
            <span id='subheader'>Maxwell J. Chen</span>
        </div>
    )
}

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

function HomepageCanvas() {
    const [shapes, setShapes] = useState([sampleShape(0)]);

    useInterval(() => {
        if(shapes.length >= 10)
            setShapes(shapes.slice(1, 10));
        if(document.visibilityState === "visible")
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