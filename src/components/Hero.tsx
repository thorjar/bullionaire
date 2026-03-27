'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';
import Button from './Button';
import GoldTokenVisual from './GoldTokenVisual';

export default function Hero() {
	return (
		<section className='relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden'>
			<div className='relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
					{/* Text content - always first */}
					<div className='text-center lg:text-left order-first'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6'>
								Gold-Backed Digital Currency
							</span>
						</motion.div>

						<motion.h1
							className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-deep-blue mb-4 sm:mb-6 leading-tight tracking-tight'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Own Something Real.{' '}
							<span className='gold-text-gradient'>
								Secure Your Place in Gold.
							</span>
						</motion.h1>

						<motion.p
							className='text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Bullionaire is a modern gold savings and education platform built
							for people who want access to tangible value in a changing world.
							We combine the enduring strength of gold with modern access,
							practical learning, and a community-driven approach to long-term
							financial awareness.
						</motion.p>

						<motion.p
							className='text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							In uncertain economic times, more people are looking beyond noise
							and back toward assets with real-world relevance. Gold has
							remained one of the world's most trusted stores of value for
							generations. Bullionaire helps make that story more accessible,
							more understandable, and more practical for everyday people.
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8 w-full sm:w-auto'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<Button
								className='px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium w-full sm:w-auto group'
								onClick={() => (window.location.href = '/join')}
							>
								<span className='flex items-center gap-1 sm:gap-2'>
									Secure Your Spot
									<ArrowRight
										weight='bold'
										size={16}
										className='sm:hidden group-hover:translate-x-1 transition-transform'
									/>
									<ArrowRight
										weight='bold'
										size={18}
										className='hidden sm:inline group-hover:translate-x-1 transition-transform'
									/>
								</span>
							</Button>
							<Button
								variant='secondary'
								className='px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium w-full sm:w-auto'
								onClick={() => (window.location.href = '/how-it-works')}
							>
								Learn More
							</Button>
						</motion.div>

						<motion.div
							className='flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<div className='flex items-center gap-1.5 sm:gap-2'>
								<CheckCircle
									weight='fill'
									size={16}
									className='text-gold flex-shrink-0'
								/>
								<span>Audited Reserves</span>
							</div>
							<div className='flex items-center gap-1.5 sm:gap-2'>
								<CheckCircle
									weight='fill'
									size={16}
									className='text-gold flex-shrink-0'
								/>
								<span>Secure Custody</span>
							</div>
						</motion.div>
					</div>

					{/* Visual: Gold bar morphing into digital token */}
					<motion.div
						className='flex items-center justify-center order-last'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<GoldTokenVisual />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
