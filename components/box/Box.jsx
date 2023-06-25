import React from "react"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Box(props) {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += (delta * 0.25) / Math.PI
    ref.current.rotation.y += (delta * 0.25) / Math.PI
  }, [])

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  )
}
