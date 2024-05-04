'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

type CommonProps = {
  color: string;
}

type ViewProps = {
  children: React.ReactNode;
  orbit: boolean;
}

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
  const localRef = useRef<any>(null)
  useImperativeHandle(ref, () => localRef.current)

  // @ts-ignore
  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}

        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }