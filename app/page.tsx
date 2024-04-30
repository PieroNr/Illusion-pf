'use client'
import React, { Suspense } from 'react'
import ShaderGradientBackground from '@/components/ShaderGradientBackground'

export default function Page() {
  return (
    <main className='w-full h-full'>
    <ShaderGradientBackground/>
      <div className='w-full h-full flex justify-center items-center'>
        {/*<h1 className='text-8xl text-center z-10 relative font-title text-white '>Illusion</h1>*/}
      </div>

    </main>
  )
}