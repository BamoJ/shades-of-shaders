'use client'

import { Suspense } from 'react'
import { OrbitControls, Loader, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import dynamic from 'next/dynamic'

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
				<color attach='background' args={['#000000']} />
				<ambientLight intensity={1.5} />
				<OrbitControls />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial attach='material' color='hotpink' />
				</mesh>
			</CanvasComponent>
		</>
	)
}
