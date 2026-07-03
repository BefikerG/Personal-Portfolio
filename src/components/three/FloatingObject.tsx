import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

interface FloatingObjectProps {
  mouseX: number
  mouseY: number
}

export function FloatingObject({ mouseX, mouseY }: FloatingObjectProps) {
  const groupRef = useRef<any>(null!)
  const gearRef = useRef<Mesh>(null!)
  const innerRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.x = mouseY * 0.3 + Math.sin(t * 0.2) * 0.1
      groupRef.current.rotation.y = mouseX * 0.5 + Math.sin(t * 0.3) * 0.15
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.2
    }
    if (gearRef.current) {
      gearRef.current.rotation.z = t * 0.3
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = -t * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={gearRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#5a5a5a"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>
      <mesh ref={innerRef} position={[0, 0, 0.1]}>
        <ringGeometry args={[0.4, 0.6, 64]} />
        <meshStandardMaterial
          color="#84cc16"
          metalness={0.9}
          roughness={0.1}
          emissive="#84cc16"
          emissiveIntensity={0.15}
          side={2}
        />
      </mesh>
      <mesh position={[0, 0, -0.2]}>
        <torusGeometry args={[1.1, 0.02, 32, 64]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 1.2, 48]} />
        <meshStandardMaterial
          color="#3a3a3a"
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.15}
          side={2}
        />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.4,
            Math.sin((i / 8) * Math.PI * 2) * 1.4,
            -0.1,
          ]}
        >
          <boxGeometry args={[0.06, 0.06, 0.3]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#f59e0b' : '#22c55e'}
            emissive={i % 2 === 0 ? '#f59e0b' : '#22c55e'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}
