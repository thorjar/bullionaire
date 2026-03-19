'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const navItems = ['Features', 'How It Works', 'Membership'];

export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<motion.div
						className='flex items-center gap-2 cursor-pointer'
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.15 },
						}}
					>
						<motion.div
							className='w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-md'
							whileHover={{
								rotate: 360,
								transition: { duration: 0.3 },
							}}
						>
							<span className='text-deep-blue font-bold text-xl'>B</span>
						</motion.div>
						<span className='text-2xl font-bold text-deep-blue'>
							BULLIONAIRE
						</span>
					</motion.div>
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
				</div>
			</div>
		</motion.nav>
	);
}
