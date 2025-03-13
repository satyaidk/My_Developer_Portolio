"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"

const FloatingIcons = () => {
  const iconRefs = useRef([])
  const icons = [
    { position: [-1, 1, 0], scale: 0.2 },
    { position: [1, -1, 0], scale: 0.15 },
    { position: [0, 0, 1], scale: 0.25 },
    { position: [-1, -1, 0.5], scale: 0.2 },
    { position: [1, 1, -0.5], scale: 0.15 },
  ]

  useFrame(({ clock }) => {
    iconRefs.current.forEach((ref, i) => {
      if (ref) {
        const t = clock.getElapsedTime() + i
        ref.position.y += Math.sin(t) * 0.001
        ref.rotation.y += 0.01
      }
    })
  })

  return (
    <group>
      {icons.map((icon, i) => (
        <mesh key={i} ref={(el) => (iconRefs.current[i] = el)} position={icon.position} scale={icon.scale}>
          <boxGeometry />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
      ))}
    </group>
  )
}

const Character = () => {
  const characterRef = useRef()

  useFrame(({ clock }) => {
    if (characterRef.current) {
      const t = clock.getElapsedTime()
      characterRef.current.position.y = Math.sin(t) * 0.1
      characterRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={characterRef}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f472b6" />
      </mesh>
    </group>
  )
}

export default function FloatingDeveloper() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Character />
        <FloatingIcons />
      </Float>
    </Canvas>
  )
}

