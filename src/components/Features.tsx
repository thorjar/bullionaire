'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const features = [
	{
		icon: (
			<svg
				className='w-8 h-8 text-deep-blue'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
				/>
			</svg>
		),
		title: '100% Gold-Backed Security',
		description:
			'Real gold, real value—no hype, just audited reserves. Every BULL token is backed by physical gold in secure custody.',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-deep-blue'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
				/>
			</svg>
		),
		title: 'Education-First Access',
		description:
			'Learn to invest like a pro through interactive modules. Complete educational content to earn tokens and master gold investing.',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-deep-blue'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
				/>
			</svg>
		),
		title: 'Membership Exclusivity',
		description:
			'Tiered memberships unlock bonuses, priority minting, and VIP insights. Join the elite circle of gold-backed investors.',
	},
];

export default function Features() {
	return (
		<section id='features' className='py-16 sm:py-20 md:py-24 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-12 sm:mb-16'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-3xl sm:text-4xl font-bold text-deep-blue mb-4'>
						Why BULL?
					</h2>
					<p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
						The gold standard meets digital revolution
					</p>
				</motion.div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} delay={index * 0.15} />
					))}
				</div>
			</div>
		</section>
	);
}
