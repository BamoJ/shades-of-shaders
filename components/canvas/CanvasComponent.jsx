'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'

export default function CanvasComponent({ children, props }) {
	return (
		<>
			<div className='fixed h-full w-screen'>
				<Canvas
					{...props}
					gl={{
						antialias: true,
						alpha: false,
						powerPreference: 'high-performance',
					}}
					dpr={[1, 2]}
				>
					{children}
				</Canvas>
			</div>
		</>
	)
}
