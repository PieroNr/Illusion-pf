'use client'

import { Canvas, ShaderGradientCanvas } from 'shadergradient'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import { Camera } from 'three'

export default function Scene({ ...props }) {

  const camera= new Camera()

  return (
    <Canvas {...props}>
      <r3f.Out />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />

    </Canvas>
  )
}
