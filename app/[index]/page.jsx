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
			<main>
				<section>
					<div className='container'>
						<h1 className='text-7xl font-bold text-black'>Page</h1>
					</div>
				</section>
			</main>
		</>
	)
}
