'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { OrbitControls } from '@react-three/drei'
import ShadersOne from './material/patternOne'
import { DoubleSide } from 'three'

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
			<OrbitControls />
			<mesh ref={ref}>
				<planeGeometry args={[4, 4, 100, 100]} />
				<ShadersOne side={DoubleSide} />
			</mesh>
		</CanvasComponent>
	)
}
