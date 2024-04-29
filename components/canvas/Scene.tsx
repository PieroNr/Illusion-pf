'use client'

import { ShaderGradientCanvas } from 'shadergradient'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({ ...props }) {

  return (
    <ShaderGradientCanvas {...props}>
      <r3f.Out />
      <Preload all />
    </ShaderGradientCanvas>
  )
}
