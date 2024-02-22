'use client'

import { useMenu } from '@/context/menuContext'
import Image from 'next/image'
import Link from 'next/link'
import {
	RiSearchLine,
	RiHome4Fill,
	RiBuilding2Fill,
	RiAddBoxFill,
	RiHeartFill,
	RiCloseFill,
} from 'react-icons/ri'

const Sidebar = () => {
	const { menuOpen, toggleMenu } = useMenu()

	return (
		<div
			className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between  md:left-0 ${menuOpen ? 'left-0 transition-all duration-300' : '-left-full md:left-0 transition-all duration-300 '}`}
		>
			<div className='absolute w-[220px] justify-end flex'>
				<RiCloseFill
					onClick={toggleMenu}
					className={`p-1 box-content  md:hidden cursor-pointer ${menuOpen ? 'block' : 'hidden'}`}
				/>
			</div>
			<div>
				<div className='mt-4 mb-8'>
					<Image src='/logo.png' alt='Spotify logo' width={100} height={30} />
				</div>
				<nav>
					<ul className='flex flex-col gap-y-4'>
						<li>
							<Link
								href='#'
								className='flex items-center gap-4 hover:text-gray-100 transition-colors'
							>
								{' '}
								<RiHome4Fill className='text-2xl' /> Inicio
							</Link>
						</li>

						<li>
							<Link
								href='#'
								className='flex items-center gap-4 hover:text-gray-100 transition-colors'
							>
								{' '}
								<RiSearchLine className='text-2xl' /> Buscar
							</Link>
						</li>

						<li className='mb-8'>
							<Link
								href='#'
								className='flex items-center gap-4 hover:text-gray-100 transition-colors'
							>
								{' '}
								<RiBuilding2Fill className='text-2xl' /> Tu biblioteca
							</Link>
						</li>

						<li>
							<Link
								href='#'
								className='flex items-center gap-4 hover:text-gray-100 transition-colors'
							>
								{' '}
								<RiAddBoxFill className='text-2xl' /> Playlist
							</Link>
						</li>

						<li>
							<Link
								href='#'
								className='flex items-center gap-4 hover:text-gray-100 transition-colors'
							>
								{' '}
								<RiHeartFill className='text-2xl' /> Tus me gusta
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<nav>
					<ul className='flex flex-col gap-y-2'>
						<li>
							<Link href='#' className='text-xs hover:underline'>
								Cookies
							</Link>
						</li>
						<li>
							<Link href='#' className='text-xs hover:underline'>
								Privacidad
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar
