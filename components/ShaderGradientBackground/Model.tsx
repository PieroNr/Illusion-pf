import React, { useEffect, useRef, useState } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib'


export default function Model() {
  const { nodes } = useLoader(GLTFLoader, "/medias/shape.glb");
  const { clock, viewport } = useThree()
  const torus = useRef<THREE.Mesh>(null);

  const sphere = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const sphere3 = useRef<THREE.Mesh>(null);

  const [scale, setScale] = useState(1);

  useFrame( () => {
    if(!sphere.current) return
    sphere.current.position.y = Math.sin(clock.getElapsedTime()) * materialProps.speed + 0.24
    sphere.current.position.x = Math.sin(clock.getElapsedTime()*-0.5) * materialProps.speed + 0.27

    if(!sphere2.current) return
    sphere2.current.position.y = Math.sin(-clock.getElapsedTime()) * materialProps.speed - 0.1
    sphere2.current.position.x = Math.sin(-clock.getElapsedTime()*-0.5) * materialProps.speed - 0.4

    if(!sphere3.current) return
    sphere3.current.position.y = Math.sin(clock.getElapsedTime()*0.7) * materialProps.speed - 0.20
    sphere3.current.position.x = Math.sin(clock.getElapsedTime()*0.2) * materialProps.speed + 0.4
  })

  useEffect(() => {
    const handleResize = () => {
      const minScale = 1;
      if (window.innerWidth < 800) {
        setScale(minScale);
      } else {
        setScale(viewport.width / 5);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const materialProps = useControls({
    thickness: { value: 0.95, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: {value: 1, min: 0, max: 1, step: 0.1},
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.1, min: 0, max: 1},
    backside: { value: false},
    speed: { value: 0.04, min: -1, max: 1, step: 0.01 },
  })

  const text = "Make Web\nbecome\nan Illusion"

  return (
    <group scale={scale}>
      <Text font={'/fonts/Salish/Salish.otf'} position={[0, 0, 1]} fontSize={0.23} color="white"
            anchorX="center" anchorY="middle" textAlign={'center'}>
        {text}
      </Text>
      <group>
        <mesh ref={sphere} position={[0.27, 0.22, 2]} scale={0.25}>
          <sphereBufferGeometry />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
        <mesh ref={sphere2} position={[-0.4, -0.10, 2]} scale={0.15}>
          <sphereBufferGeometry />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>

        <mesh ref={sphere3} position={[0.2, -0.20, 2]} scale={0.1}>
          <sphereBufferGeometry />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  )
}