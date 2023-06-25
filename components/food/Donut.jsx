import React from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { useMatcapTexture } from '@react-three/drei'

const geometry = new THREE.TorusGeometry(1, 0.6, 32, 100)
const material = new THREE.MeshMatcapMaterial()

export default function Donut(props) {
	const [texture] = useMatcapTexture(
		'49200B_C6926C_9C642B_A45C26',
		512
	)
	const ref = useRef()
	const gRef = useRef()

	useFrame((state, delta) => {
		for (const donut of ref.current.children) {
			donut.rotation.x += delta * 0.5
			donut.rotation.x += delta * 0.5
			donut.rotation.z += delta * 0.5
		}
	})

	useEffect(() => {
		ref.current.geometry = geometry
		ref.current.material = material
	}, [])

	const [torusGeo, setTorusGeo] = useState()
	const [torusMat, setTorusMat] = useState()

	return (
		<>
			<torusGeometry ref={setTorusGeo} args={[1, 0.6, 32, 100]} />
			<meshMatcapMaterial ref={setTorusMat} matcap={texture} />
			<group ref={ref}>
				{[...Array(150)].map((e, key) => (
					<mesh
						geometry={torusGeo}
						material={torusMat}
						ref={ref}
						key={key}
						position={[
							(Math.random() - 0.5) * 12,
							(Math.random() - 0.5) * 12,
							(Math.random() - 0.5) * 12,
						]}
						scale={0.15 + Math.random() * 0.15}
						rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
					/>
				))}
			</group>
		</>
	)
}
