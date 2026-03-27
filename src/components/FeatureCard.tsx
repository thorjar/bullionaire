'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	delay?: number;
}

export default function FeatureCard({
	icon,
	title,
	description,
	delay = 0,
}: FeatureCardProps) {
	return (
		<motion.div
			className='bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300'
			whileHover={{
				y: -4,
				transition: { duration: 0.2 },
			}}
		>
			<div className='w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-deep-blue'>
				{icon}
			</div>
			<h3 className='text-lg sm:text-xl font-semibold text-deep-blue mb-2 sm:mb-3 tracking-tight'>
				{title}
			</h3>
			<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
				{description}
			</p>
		</motion.div>
	);
}
