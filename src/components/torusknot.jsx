import React from 'react'

const TorusKnot = ({ position, size, color }) => {  
    return (
        <mesh position={position}>
            <torusKnotGeometry args={size}/>
            <meshStandardMaterial color={color} />
        </mesh>
    )
  }

export default TorusKnot