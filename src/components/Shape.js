import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function getGeometry(geometry, dims) {
    switch(geometry) {
        case 'sphere':
            return (<sphereGeometry args={dims} />);
        case 'torus':
            return (<torusGeometry args={dims} />);
        case 'tetrahedron':
            return (<tetrahedronGeometry args={dims} />);
        case 'icosahedron':
            return (<icosahedronGeometry args={dims} />);
        default:
            return (<boxGeometry args={dims} />);
    };
}

function Shape({ configs }) {
    const meshRef = useRef();
    var startTime = -1;

    const { color, dims, geometry, position, rotations, speed, wireframe } = configs;
    
    // console.log(configs);
    // console.log(geometry);
    // console.log(dims);
    // console.log(color);
    // console.log(rotations);
    // console.log(speed);
    // console.log(position);
    // console.log(wireframe);
    
    useFrame(({clock}) => {
        if(document.visibilityState !== 'visible') return;

        if(startTime === -1) startTime = clock.getElapsedTime();
        
        let currentTime = clock.getElapsedTime();
        meshRef.current.rotation.x = currentTime * rotations[0];
        meshRef.current.rotation.y = currentTime * rotations[1];
        meshRef.current.rotation.z = currentTime * rotations[2];

        meshRef.current.position.y -= (currentTime - startTime) * speed;
    });

    return (
        <mesh ref={meshRef} position={position}>
            {getGeometry(geometry, dims)}
            {<meshStandardMaterial color={color} wireframe={wireframe} />}
        </mesh>
    )
}

export default Shape;