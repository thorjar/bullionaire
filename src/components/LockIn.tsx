'use client';

import { motion } from 'framer-motion';
import { Lock, Hourglass, Target } from '@phosphor-icons/react';

export default function LockIn() {
	return (
		<section
			id='lock-in'
			className='py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50'
		>
			<div className='max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
				>
					<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4'>
						Built for Long-Term Thinking
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue mb-4 sm:mb-6 tracking-tight px-2'>
						Intention Over Impulse
					</h2>
					<p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4'>
						Bullionaire is being developed with a long-term mindset. The
						platform is intended to encourage discipline, responsible
						participation, and a stronger focus on value over time rather than
						short-term decision-making.
					</p>
					<p className='text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4'>
						As part of that structure, certain participation features may
						include defined lock-in or holding mechanisms designed to support
						stability, alignment, and long-term engagement.
					</p>
					<p className='text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4'>
						This approach reflects the core philosophy behind Bullionaire:
						meaningful wealth habits are built through consistency, patience,
						and substance.
					</p>
				</motion.div>

				<motion.div
					className='grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
						<Lock
							size={36}
							weight='duotone'
							className='text-gold-dark mx-auto mb-3 sm:mb-4'
						/>
						<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
							Stability
						</h3>
						<p className='text-gray-600 text-sm'>
							Mechanisms that support consistent engagement.
						</p>
					</div>
					<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
						<Hourglass
							size={36}
							weight='duotone'
							className='text-gold-dark mx-auto mb-3 sm:mb-4'
						/>
						<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
							Patience
						</h3>
						<p className='text-gray-600 text-sm'>
							Building meaningful wealth habits over time.
						</p>
					</div>
					<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
						<Target
							size={36}
							weight='duotone'
							className='text-gold-dark mx-auto mb-3 sm:mb-4'
						/>
						<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
							Substance
						</h3>
						<p className='text-gray-600 text-sm'>
							Focus on real value, not short-term noise.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='bg-deep-blue text-white p-6 sm:p-8 rounded-2xl'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<p className='text-gold font-semibold text-lg sm:text-xl italic'>
						&quot;Bullionaire is designed for people who want to build with
						intention, not chase noise.&quot;
					</p>
				</motion.div>
			</div>
		</section>
	);
}
