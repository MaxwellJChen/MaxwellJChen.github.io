import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';
import Shape from './Shape';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

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

function sampleShape(key) {
    let configs;
    let randomNumber = Math.floor(Math.random() * 5);
    switch(randomNumber) {
        case 0:
            let dim = Math.random() * 0.25 + 0.5;
            configs = {geometry: 'box', dims: [dim, dim, dim]};
            break;
        case 1:
            configs = {geometry: 'sphere', dims: [Math.random() * 0.25 + 0.35]};
            break;
        case 2:
            configs = {geometry: 'torus', dims: [Math.random() * 0.15 + 0.3, Math.random() * 0.10 + 0.10]};
            break;
        case 3:
            configs = {geometry: 'tetrahedron', dims: [Math.random() * 0.25 + 0.45]};
            break;
        case 4:
            configs = {geometry: 'icosahedron', dims: [Math.random() * 0.25 + 0.35]};
            break;
    }
    configs.wireframe = Math.random() < 1/3;
    configs.rotations = Array(3).fill().map(() => Math.random() * 3);
    configs.rotations[Math.floor(Math.random() * 3)] = 0;
    configs.speed = 0.005;
    configs.position = [Math.random() * 5 - 2.5, 3, 0];
    if(Math.random() > 0.25)
        configs.color = [0xe06666, 0x93c47d, 0x6d9eeb][Math.floor(Math.random() * 3)];
    else
        configs.color = [0xdddddd, 0xbbbbbb, 0x999999][Math.floor(Math.random() * 3)];

    return (
        <Shape  configs={configs} key={key} />
    )
}

function ProceduralCanvas() {
    const [shapes, setShapes] = useState([sampleShape(0)]);

    useInterval(() => {
        if(document.visibilityState !== 'visible') return;

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

export default ProceduralCanvas;