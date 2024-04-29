'use client'

import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

// @ts-ignore
const ShaderGradient = dynamic(() => import('shadergradient').then((mod: any) => mod.ShaderGradient), { ssr: false })
// @ts-ignore
const View = dynamic(() => import('@/components/canvas/View').then((mod: any) => mod.View), { ssr: false })

type ShaderGradientProps = {
  cDistance: number;
  color1: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  positionX: number;
  positionY: number;
  positionZ: number;
  cAzimuthAngle: number;
  cPolarAngle: number;
  uSpeed: number;
  range: string;
  color2: string;
  color3: string;
}

type ViewProps = {
  className: string;
  children: React.ReactNode;
}

// @ts-ignore
const ShaderGradientWrapper = (props: ShaderGradientProps) => <ShaderGradient {...props} />
// @ts-ignore
const ViewWrapper = (props: ViewProps) => <View {...props} />

export default function Page() {
  return (
    <ViewWrapper className='w-full h-full'>
      <Suspense fallback={null}>
        <ShaderGradientWrapper cDistance={3} color1='#0080ff' rotationX={0} rotationY={10} rotationZ={50} positionX={0} positionY={0} positionZ={2} cAzimuthAngle={120} cPolarAngle={90} uSpeed={0.2} range={'disabled'}  color2='#dbccdb' color3='#b2b2e1' />
      </Suspense>
    </ViewWrapper>
  )
}