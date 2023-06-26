'ucse client'

import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

const ShaderP1 = shaderMaterial(
	{
		uMouse: new THREE.Vector2(0, 0),
		uTime: 0,
	},
	vertexShader,
	fragmentShader
)
extend({ ShaderP1 })

const ShadersOne = forwardRef(({ children, ...props }, ref) => {
	const localRef = useRef()

	useImperativeHandle(ref, () => localRef.current)

	useFrame((_, delta) => {
		localRef.current.uTime += delta
	})

	return (
		<shaderP1
			ref={localRef}
			{...props}
			glsl={THREE.GLSL3}
			attach='material'
		/>
	)
})

export default ShadersOne
