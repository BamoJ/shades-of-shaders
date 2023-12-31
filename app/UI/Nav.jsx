import React, { use } from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export default function Nav() {
	return (
		<nav className='fixed inset-0 z-50 h-fit w-full text-white mix-blend-exclusion'>
			<div className='w-full px-10 py-5'>
				<div className='relative flex w-full flex-row items-center justify-between pb-2'>
					<div className='absolute bottom-0 h-[1px] w-full bg-white' />
					<Link className='font-bold' href={'/'}>
						B®
					</Link>
					<ul className='flex flex-row space-x-3'>
						<li>
							<Link className='cursor-pointer font-bold' href={'/index'}>
								Index
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='absolute right-0 hidden max-w-fit'>
				<div className='flex flex-col px-10'>Index</div>
			</div>
		</nav>
	)
}
