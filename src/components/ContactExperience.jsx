import { useGLTF } from '@react-three/drei'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './Models/Computer-optimized'

const ComputerModel = () => {
  const computer = useGLTF('/models/computer-optimized.glb');
  return (
    <group position={[0, -1.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
      <primitive object={computer.scene} />
    </group>
  )
}


const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0,3,7], fov: 45}} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5,5,5]} intensity={1} />
      <spotLight position={[-5,5,5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* <Environment preset='city' /> */}
      <OrbitControls 
        enableZoom={false}
        // enablePan={false}
        minPolarAngle={Math.PI/5}
        maxPolarAngle={Math.PI/2}
      />
      <group scale={0.03} position={[0,-1.5, -2]} castShadow> 
        <Computer />
      </group>
    </Canvas>
  )
}

export default ContactExperience