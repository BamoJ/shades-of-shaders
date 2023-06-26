import React from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export default function Footer() {
	return (
		<nav className='fixed bottom-0 z-50 h-fit w-full'>
			<div className='w-full px-10 py-5'>
				<div className='relative flex w-full flex-row items-center justify-between pt-4'>
					<div className='absolute top-0 h-[1px] w-full bg-white' />
					<span className='font-bold'>2023®</span>
					<span className='font-bold'>Shaders</span>
				</div>
			</div>
			<div className='absolute right-0 hidden max-w-fit'>
				<div className='flex flex-col px-10'>Index</div>
			</div>
		</nav>
	)
}
