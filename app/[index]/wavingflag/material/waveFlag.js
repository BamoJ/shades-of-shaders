'ucse client'

import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

const WaveFlag = shaderMaterial(
	{
		uMouse: new THREE.Vector2(0, 0),
		uTime: 0,
		uFreq: new THREE.Vector2(5, 5),
		uTexture: new THREE.TextureLoader().load('/textures/onepiece.jpg'),
	},
	vertexShader,
	fragmentShader
)
extend({ WaveFlag })

const WaveFlagShaders = forwardRef(({ children, ...props }, ref) => {
	const localRef = useRef()

	useImperativeHandle(ref, () => localRef.current)

	// useFrame((_, delta) => {
	// 	localRef.current.uTime += delta
	// })

	return (
		<waveFlag
			ref={localRef}
			{...props}
			glsl={THREE.GLSL3}
			attach='material'
		/>
	)
})

export default WaveFlagShaders
