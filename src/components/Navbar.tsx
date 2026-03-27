'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { List, X, CaretRight } from '@phosphor-icons/react';
import Button from './Button';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'How It Works', href: '/how-it-works' },
	{ label: 'Opportunity', href: '/opportunity' },
	{ label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Close mobile menu on resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileMenuOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Track scroll for shadow
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
		};
		if (mobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [mobileMenuOpen]);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${
				isScrolled
					? 'bg-white/95 backdrop-blur-md shadow-md'
					: 'bg-white/90 backdrop-blur-md'
			}`}
		>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full'>
				<div className='flex justify-between items-center h-14 sm:h-16'>
					<motion.a
						href='/'
						className='flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0'
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.15 },
						}}
					>
						<img
							src='/SVG/Gold-white-Horizontal (2).svg'
							alt='Bullionaire Logo'
							className='h-8 sm:h-9 w-auto flex-shrink-0'
						/>
					</motion.a>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex items-center gap-4 xl:gap-6'>
						{navItems.map((item, index) => (
							<motion.a
								key={item.label}
								href={item.href}
								className='text-gray-600 hover:text-deep-blue transition-colors text-xs sm:text-sm font-medium relative group whitespace-nowrap'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index }}
								whileHover={{
									y: -2,
									transition: { duration: 0.15 },
								}}
							>
								{item.label}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 gold-gradient group-hover:w-full transition-all duration-300'></span>
							</motion.a>
						))}
						<Button
							onClick={() => (window.location.href = '/join')}
							className='text-xs sm:text-sm px-4 py-2 xl:px-6 xl:py-2.5'
						>
							<span className='flex items-center gap-1 sm:gap-2'>
								Join Now
								<CaretRight weight='bold' size={14} className='sm:hidden' />
								<CaretRight
									weight='bold'
									size={16}
									className='hidden sm:inline'
								/>
							</span>
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className='lg:hidden relative' ref={menuRef}>
						<button
							className='p-2 text-gray-600 hover:text-deep-blue'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label='Toggle menu'
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X size={24} weight='bold' />
							) : (
								<List size={24} weight='bold' />
							)}
						</button>

						{/* Mobile Navigation - Dropdown */}
						<AnimatePresence>
							{mobileMenuOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.2 }}
									className='absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[60]'
								>
									<div className='flex flex-col'>
										{navItems.map((item, index) => (
											<motion.a
												key={item.label}
												href={item.href}
												className='text-gray-700 hover:text-deep-blue hover:bg-gray-50 px-4 py-3 transition-colors text-sm font-medium'
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.03 * index }}
												onClick={() => setMobileMenuOpen(false)}
											>
												{item.label}
											</motion.a>
										))}
										<div className='border-t border-gray-100 mt-1 pt-3 pb-2 px-4'>
											<Button
												className='w-full py-2.5 text-sm'
												onClick={() => {
													setMobileMenuOpen(false);
													window.location.href = '/join';
												}}
											>
												<span className='flex items-center gap-2 justify-center'>
													Join Now
													<CaretRight weight='bold' size={16} />
												</span>
											</Button>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
