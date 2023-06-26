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

export default function Home() {
	return (
		<>
			<Loader />
			<CanvasComponent>
				{/* <Perf position='top-left' /> */}
				<OrbitControls enableDamping />
				<ambientLight intensity={0.5} />
				<Suspense fallback={null}>
					<Text
						font='/fonts/Helvetica-Neue-LT-Condensed_77-Bold-Condensed.typeface.json'
						curveSegments={12}
						bevelEnabled
						bevelThickness={0.02}
						bevelSize={0.01}
						bevelOffset={0.02}
						bevelSegments={3}
						size={1}
						height={0.25}
					/>
				</Suspense>
			</CanvasComponent>
		</>
	)
}
