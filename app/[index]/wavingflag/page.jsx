'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { OrbitControls, Stage } from '@react-three/drei'
import { DoubleSide } from 'three'
import WaveFlagShaders from './material/waveFlag'

const CanvasComponent = dynamic(
	() => import('@/components/canvas/CanvasComponent'),
	{
		ssr: false,
	}
)

export default function page() {
	const ref = useRef()

	return (
		<CanvasComponent>
			<color attach='background' args={['#131313']} />
			<ambientLight intensity={0.5} />
			<OrbitControls />
			<mesh ref={ref}>
				<planeGeometry args={[4.5, 3, 100, 100]} />
				<WaveFlagShaders side={DoubleSide} />
			</mesh>
		</CanvasComponent>
	)
}
