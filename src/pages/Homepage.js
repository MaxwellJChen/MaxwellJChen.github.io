import { Canvas } from '@react-three/fiber';
import Shape from './../components/Shape';
import './Homepage.css';

function HomepageText() {
    return (
        <div id='homepage-text-container'>
            <span id='homepage-header'>To A Better Future For Humanity.</span>
            <span id='homepage-subheader'>Maxwell J. Chen</span>
        </div>
    )
}

function sampleShape() {
    // geometry
    let geometry = 'box';

    // dimensions
    let dim = Math.random() * 0.5 + 0.5;
    let dims = [dim, dim, dim];

    // wireframe
    let wireframe = Math.random() > 0.5;

    // rotations
    let rotations = Array(3).fill().map(() => Math.random() * 5);

    // speed
    let speed = Math.random() * 0.004 + 0.003;

    // position
    let position = [Math.random() * 7 - 3.5, 3, 0];

    // color
    const colors = [0xffffff, 0xcccccc, 0x999999, 0x666666, 0x333333, 0xe06666, 0x93c47d, 0x6d9eeb];
    let color = colors[Math.floor(Math.random() * 8)];

    console.log(geometry);
    console.log(dims);
    console.log(color);
    console.log(rotations);
    console.log(speed);
    console.log(position);
    console.log(wireframe);

    return (
        <Shape geometry={geometry} dims={dims} color={color} rotations={rotations} speed={speed} position={position} wireframe={wireframe}/>
    )
}

function HomepageCanvas() {
    let shapes = Array(5).fill().map(sampleShape);
    // let shapes = [
    //     <Shape geometry={'box'} dims={[1, 1, 1]} color={0xffffff} rotations={[1, 3, 1]} speed={5e-3} position={[3.5, 3, 0]} wireframe={true} />
    // ];

    return (
        <div id='homepage-canvas-container'>
            <Canvas camera={{ fov: 15, near: 0.1, far: 1000, position: [0, 0, 15] }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} castShadow={true} intensity={Math.PI * 2} />
                {shapes}
            </Canvas>
        </div>
    )
}

function Homepage() {
    return (
        <div id='homepage-container'>
            <HomepageText />
            <HomepageCanvas />
        </div>
    )
}

export default Homepage;