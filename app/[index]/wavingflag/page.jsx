'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { OrbitControls } from '@react-three/drei'
import { DoubleSide } from 'three'
import WaveFlagShaders from './material/waveFlag'

const CanvasComponent = dynamic(
	() => import('@/components/canvas/CanvasComponent'),
	{
		ssr: false,
	}
)

export default function page() {
	return (
		<CanvasComponent>
			<OrbitControls />
			<mesh>
				<planeGeometry args={[3, 3, 100, 100]} />
				<WaveFlagShaders side={DoubleSide} />
			</mesh>
		</CanvasComponent>
	)
}
