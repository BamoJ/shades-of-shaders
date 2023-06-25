'use client'

import { Suspense } from 'react'
import { OrbitControls, Loader, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import dynamic from 'next/dynamic'

const Text = dynamic(() => import('@/components/text3D/Text'), {
	ssr: false,
})

const CanvasComponent = dynamic(
	() => import('@/components/canvas/CanvasComponent'),
	{
		ssr: false,
	}
)

export default function page() {
	return (
		<>
			<Loader />
			<CanvasComponent>
				<Perf position='bottom-left' />
				<Text font='/fonts/Helvetica-Neue-LT-Condensed_77-Bold-Condensed.typeface.json' />
				<color attach='background' args={['#ffffff']} />
			</CanvasComponent>
		</>
	)
}
