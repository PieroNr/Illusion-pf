'use client'

import dynamic from 'next/dynamic'
import React, { MutableRefObject, Suspense, useRef } from 'react'
import { Environment, useGLTF } from '@react-three/drei'
import Model from '@/components/ShaderGradientBackground/Model'

// @ts-ignore
const ShaderGradient = dynamic(() => import('shadergradient').then((mod) => mod.ShaderGradient), { ssr: false })
// @ts-ignore
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), { ssr: false })



// @ts-ignore
const ViewWrapper = (props: ViewProps) => <View {...props} />

export default function ShaderGradientBackground() {

  return (
    <ViewWrapper className='w-full h-full z-0' style={{ position: 'absolute' }}>
      <Suspense fallback={null}>
        <ShaderGradient color1='#b8ccff' uAmplitude={3} uStrength={2.5} brightness={0.7} rotationX={0} rotationY={0} rotationZ={50} positionX={0} positionY={0} positionZ={0} uSpeed={0.3} range={'disabled'}  color2='#dbccdb' color3='#b2b2e1' />
        <>
          <directionalLight intensity={3} position={[0, 2, 3]} color={'blue'} />
          <Model />
          <Environment preset="city" />
        </>
      </Suspense>
    </ViewWrapper>
  )
}
