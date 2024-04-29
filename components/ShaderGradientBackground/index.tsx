'use client'

import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

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
          <ShaderGradient cDistance={3} color1='#0080ff' brightness={1} rotationX={0} rotationY={10} rotationZ={50} positionX={0} positionY={0} positionZ={2} uSpeed={0.2} range={'disabled'}  color2='#dbccdb' color3='#b2b2e1' />

        </Suspense>
      </ViewWrapper>
  )
}