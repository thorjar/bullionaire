'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import GoldTokenVisual from './GoldTokenVisual';

export default function Hero() {
	return (
		<section className='relative blue-gradient text-white py-20 sm:py-28 md:py-32 overflow-hidden'>
			<div className='absolute top-10 left-5 w-48 h-48 sm:w-72 sm:h-72 bg-gold rounded-full blur-3xl opacity-15'></div>
			<div className='absolute bottom-10 right-5 w-64 h-64 sm:w-96 sm:h-96 bg-gold-dark rounded-full blur-3xl opacity-15'></div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
					{/* Text content - always first */}
					<div className='text-center md:text-left order-first'>
						<motion.h1
							className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight'
							initial={{ opacity: 0, y: 60 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Become a <span className='gold-text-gradient'>BULLIONAIRE.</span>
							<br className='hidden sm:block' />
							Own Gold, Digitally.
						</motion.h1>

						<motion.p
							className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							100% backed by physical gold reserves. Educate, mint, prosper.
							Membership opens soon.
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button className='px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-xl w-full sm:w-auto'>
								Join Waitlist for Launch Perks
							</Button>
							<Button
								variant='secondary'
								className='px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto'
							>
								Learn More
							</Button>
						</motion.div>

						<motion.div
							className='mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.6 }}
						>
							<div className='flex items-center gap-2'>
								<svg
									className='w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span>Audited Gold Reserves</span>
							</div>
							<span className='hidden sm:inline'>•</span>
							<div className='flex items-center gap-2'>
								<svg
									className='w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span>Secure Third-Party Custody</span>
							</div>
						</motion.div>
					</div>

					{/* Visual: Gold bar morphing into digital token - always second */}
					<motion.div
						className='flex items-center justify-center order-last'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<GoldTokenVisual />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
