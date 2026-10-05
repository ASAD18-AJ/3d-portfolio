import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';



const TechIcon = ({model}) => {
    const reducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name ==='Object_5') {
                    child.material = new THREE.MeshStandardMaterial({color:'white'})
                }
            })
        }
    },[scene, model.name])
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Environment preset='city' />
        <OrbitControls enableZoom={false} />

        <Float speed={reducedMotion ? 0 : 5.5} rotationIntensity={reducedMotion ? 0 : 0.5} floatIntensity={reducedMotion ? 0 : 0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon;
