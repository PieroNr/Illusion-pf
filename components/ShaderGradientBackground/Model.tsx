import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib'


export default function Model() {
  const { nodes } = useLoader(GLTFLoader, "/medias/torrus.glb");
  const { viewport } = useThree()
  const torus = useRef<THREE.Mesh>(null);

  useFrame( () => {
    if(!torus.current ) return
    torus.current.rotation.x += materialProps.speed
  })

  const materialProps = useControls({
    thickness: { value: 0.9, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: {value: 1, min: 0, max: 1, step: 0.1},
    ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.14, min: 0, max: 1},
    backside: { value: true},
    speed: { value: 0.05, min: 0, max: 1, step: 0.05 },
  })

  return (
    <group scale={viewport.width / 3.75} >
    <Text font={'/fonts/BrownSugarModern/BrownSugar.otf'} position={[0, 0, 1.2]} fontSize={0.08} color="white" anchorX="center" anchorY="middle">
    Illusion
  </Text>
  <mesh ref={torus} {...nodes.Torus002} position={[0, 0, 1.3]} scale={[0.1, 0.1, 0.1]}>
  <MeshTransmissionMaterial {...materialProps}/>
  </mesh>
  </group>
)
}