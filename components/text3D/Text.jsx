'use client'

import React from 'react'
import { Text3D, Center, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Text(props) {
	const [texture] = useMatcapTexture(
		'72625B_F0DFD0_D9BAA5_C3A595',
		512
	)
	// const ref = useRef()
	// useFrame((state, delta) => {
	//   ref.current.rotation.x += delta / 2
	// })
	return (
		<>
			<Center>
				<Text3D lineHeight={0.75} letterSpacing={-0.021} {...props}>
					{`R3F\nNext 13`}
					<meshMatcapMaterial matcap={texture} />
				</Text3D>
			</Center>
		</>
	)
}
