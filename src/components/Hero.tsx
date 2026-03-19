'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import GoldTokenVisual from './GoldTokenVisual';

export default function Hero() {
	return (
		<section className='relative blue-gradient text-white py-32 overflow-hidden'>
			<div className='absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl opacity-15'></div>
			<div className='absolute bottom-20 right-10 w-96 h-96 bg-gold-dark rounded-full blur-3xl opacity-15'></div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='text-center md:text-left'>
						<motion.h1
							className='text-5xl md:text-7xl font-bold mb-6'
							initial={{ opacity: 0, y: 60 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Become a <span className='gold-text-gradient'>BULLIONAIRE</span>
							<br />
							Own Gold, Digitally.
						</motion.h1>

						<motion.p
							className='text-xl md:text-2xl mb-8 text-gray-200'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							100% backed by physical gold reserves. Educate, mint, prosper.
							Membership opens soon.
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button className='px-8 py-4 text-lg shadow-xl'>
								Join Waitlist for Launch Perks
							</Button>
							<Button variant='secondary' className='px-8 py-4 text-lg'>
								Learn More
							</Button>
						</motion.div>

						<motion.div
							className='mt-12 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.6 }}
						>
							<svg
								className='w-5 h-5 text-gold'
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
							<span className='mx-2'>•</span>
							<svg
								className='w-5 h-5 text-gold'
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
						</motion.div>
					</div>

					{/* Visual: Gold bar morphing into digital token */}
					<motion.div
						className='flex items-center justify-center'
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
