'use client';

import { motion } from 'framer-motion';
import { TrendUp, Shield, Globe } from '@phosphor-icons/react';

const features = [
	{
		icon: <TrendUp size={32} weight='duotone' />,
		title: 'Timeless Value',
		description:
			'Gold has served as a store of value and symbol of stability across generations, borders, and market cycles.',
	},
	{
		icon: <Shield size={32} weight='duotone' />,
		title: 'Tangible & Scarce',
		description:
			'Not simply a historical asset. Gold continues to play a meaningful role in the modern economy.',
	},
	{
		icon: <Globe size={32} weight='duotone' />,
		title: 'Grounded Foundation',
		description:
			'In a world filled with uncertainty and digital promises, people are looking for something more grounded.',
	},
];

export default function WhyGold() {
	return (
		<section
			id='why-gold'
			className='py-16 sm:py-20 md:py-24 lg:py-28 bg-white'
		>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<motion.div
					className='text-center mb-12 sm:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
				>
					<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4'>
						Why Gold Still Matters
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight px-2'>
						A Legacy of Stability
					</h2>
					<p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4'>
						For centuries, gold has held a unique place in the global financial
						system. It has served as a store of value, a reserve asset, and a
						symbol of stability across generations, borders, and market cycles.
					</p>
					<p className='text-base sm:text-lg text-gray-600 mb-8 leading-relaxed px-4'>
						While many financial trends come and go, gold has remained relevant
						because it is tangible, scarce, and widely understood. It is not
						simply a historical asset. It continues to play a meaningful role in
						the modern economy because people, institutions, and nations still
						recognise its enduring value.
					</p>
				</motion.div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300'
							whileHover={{
								y: -4,
								transition: { duration: 0.2 },
							}}
						>
							<div className='w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-deep-blue'>
								{feature.icon}
							</div>
							<h3 className='text-lg sm:text-xl font-semibold text-deep-blue mb-2 sm:mb-3 tracking-tight'>
								{feature.title}
							</h3>
							<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
