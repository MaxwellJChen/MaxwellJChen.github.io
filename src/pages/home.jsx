import React from 'react'
import { Canvas } from '@react-three/fiber'
import Header from '../components/header.jsx'
import Sphere from '../components/sphere.jsx'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Header>Home</Header>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <Sphere size={[1.5, 25, 25]} color={'lightblue'} />
      </Canvas>
    </div>
  )
}

export default Home