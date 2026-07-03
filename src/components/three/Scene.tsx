import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FloatingObject } from './FloatingObject'
import { Suspense } from 'react'

interface SceneProps {
  mouseX: number
  mouseY: number
}

export function Scene({ mouseX, mouseY }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#84cc16" />
        <pointLight position={[0, 0, 2]} intensity={0.5} color="#22c55e" />
        <FloatingObject mouseX={mouseX} mouseY={mouseY} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Suspense>
    </Canvas>
  )
}
