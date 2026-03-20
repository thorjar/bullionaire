'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

const navItems = ['Features', 'How It Works', 'Membership'];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<motion.a
						href='#'
						className='flex items-center gap-2 cursor-pointer'
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.15 },
						}}
					>
						<img
							src='/logo.png'
							alt='Bullionaire Logo'
							className='h-10 w-auto'
						/>
						<span className='text-xl sm:text-2xl font-bold text-deep-blue'>
							BULLIONAIRE
						</span>
					</motion.a>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{navItems.map((item, index) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
								className='text-deep-blue hover:text-gold-dark transition-colors relative group cursor-pointer'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index }}
								whileHover={{
									y: -3,
									scale: 1.05,
									transition: { duration: 0.15 },
								}}
							>
								{item}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 gold-gradient group-hover:w-full transition-all duration-300'></span>
							</motion.a>
						))}
						<Button>Join Waitlist</Button>
					</div>

					{/* Mobile menu button */}
					<button
						className='md:hidden p-2 text-deep-blue'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Toggle menu'
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							{mobileMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='md:hidden py-4 border-t border-gray-100'
					>
						<div className='flex flex-col gap-4'>
							{navItems.map(item => (
								<a
									key={item}
									href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
									className='text-deep-blue hover:text-gold-dark transition-colors py-2'
									onClick={() => setMobileMenuOpen(false)}
								>
									{item}
								</a>
							))}
							<Button className='w-full'>Join Waitlist</Button>
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}
