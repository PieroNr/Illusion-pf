'use client'

import { ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
// @ts-ignore
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

type SceneProps = {
  style: React.CSSProperties;
  eventSource: React.MutableRefObject<HTMLDivElement | null>;
  eventPrefix: string;
}

// @ts-ignore
const SceneWrapper = (props: SceneProps) => <Scene {...props} />

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <SceneWrapper
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export { Layout }