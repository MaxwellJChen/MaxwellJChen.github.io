import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';
import Shape from './Shape';
import './ProceduralCanvas.css';

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

function sampleShape(counts, shapes) {
    console.log(shapes);

    let configs;
    let randomNumber = Math.floor(Math.random() * 5);
    switch(randomNumber) {
        case 1:
            configs = {geometry: 'sphere', dims: [Math.random() * 0.3 + 0.15, 32, 32]};
            break;
        case 2:
            let inner = Math.random() * 0.1 + 0.2;
            configs = {geometry: 'torus', dims: [inner, Math.random() * 0.05 + inner * 0.3, 32, 32]};
            break;
        case 3:
            configs = {geometry: 'tetrahedron', dims: [Math.random() * 0.25 + 0.45]};
            break;
        case 4:
            configs = {geometry: 'icosahedron', dims: [Math.random() * 0.25 + 0.35]};
            break;
        default:
            let dim = Math.random() * 0.25 + 0.5;
            configs = {geometry: 'box', dims: [dim, dim, dim]};
    };

    configs.wireframe = Math.random() < 0.5;
    configs.rotations = Array(3).fill().map(() => Math.random() * 3);
    configs.rotations[Math.floor(Math.random() * 3)] = 0;
    configs.speed = 0.005;
    if(shapes.length === 0)
        configs.position = [Math.random() * 6 - 3, 3, 0];
    else {
        let prev = shapes[shapes.length - 1].props.configs.position[0];
        if(prev > 0) {
            configs.position = [Math.random() * (prev + 2) - 3, 3, 0];
        }
        else {
            configs.position = [Math.random() * (2 - prev) + prev + 1, 3, 0];
        }
    }
    
    let colors = [
        0xcb4b4b, // dark red
        0xe06666, // light red
        0x6aa84f, // dark green
        0x93c47d, // light green
        0x3c78d8, // dark blue
        0x6d9eeb, // light blue
    ];

    if(shapes.length === 0)
        configs.color = colors[Math.floor(Math.random() * 3)];
    else {
        let prevColorIdx = colors.indexOf(shapes[shapes.length - 1].props.configs.color);
        prevColorIdx -= prevColorIdx % 2 === 1 ? 1 : 0;
        colors.splice(prevColorIdx, 2);

        configs.color = colors[Math.floor(Math.random() * colors.length)];
    }
    

    return (
        <Shape  configs={configs} key={counts} />
    )
}

function ProceduralCanvas() {
    const [shapes, setShapes] = useState([sampleShape(0, [])]);
    const [counts, setCounts] = useState(1);

    useInterval(() => {
        if(document.visibilityState !== 'visible') return;

        if(shapes.length >= 20)
            setShapes(shapes.slice(1, 20));
    }, 301);

    useInterval(() => {
        if(document.visibilityState !== 'visible') return;

        setCounts(counts + 1);
        setShapes([...shapes, sampleShape(counts, shapes)]);
    }, 500);

    return (
        <div style={{'width': '100vw', 'height': '100vh'}}>
            <Canvas camera={{ fov: 15, near: 0.1, far: 1000, position: [0, 0, 15] }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} castShadow={true} intensity={Math.PI * 2} />
                {shapes}
            </Canvas>
            <div id='gradient' />
        </div>
    )
}

export default ProceduralCanvas;


// else {
//     let xpositions = Array(shapes.length).fill().map((v, i) => shapes[i].props.configs.position[0]);
//     xpositions.sort();
//     let maxGap = -1; let gapIdx = -2
//     for(let i = 0; i < xpositions.length - 1; i++) {
//         if(xpositions[i + 1] - xpositions[i] > maxGap) {
//             maxGap = xpositions[i + 1] - xpositions[i];
//             gapIdx = i;
//         }
//     }
//     if(xpositions[0] + 2.5 > maxGap) {
//         maxGap = xpositions[0] + 2.5;
//         gapIdx = -1;
//     }
//     if(2.5 - xpositions[xpositions.length - 1] > maxGap) {
//         maxGap = xpositions[0] + 2.5;
//         gapIdx = xpositions.length;
//     }

//     if(gapIdx === -1)
//         configs.position = [-2.5, 3, 0];
//     else if(gapIdx === xpositions.length)
//         configs.position = [2.5, 3, 0];
//     else
//         configs.position = [xpositions[gapIdx] + (xpositions[gapIdx + 1] - xpositions[gapIdx]) / 2, 3, 0];
// }