import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({ position, size, color }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 100 * delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime)
  })

  return (
      <mesh position={position} ref={ref}>
          <boxGeometry args={size}/>
          <meshStandardMaterial color={color} />
      </mesh>
  )
}

export default Cube