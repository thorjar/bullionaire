'use client';

import { motion } from 'framer-motion';

interface StepCardProps {
	step: string;
	title: string;
	description: string;
	index: number;
}

export default function StepCard({
	step,
	title,
	description,
	index,
}: StepCardProps) {
	return (
		<motion.div
			className='text-center'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
		>
			<div className='w-12 h-12 sm:w-16 sm:h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold text-deep-blue shadow-md flex-shrink-0'>
				{step}
			</div>
			<h3 className='text-base sm:text-xl font-bold text-deep-blue mb-2'>
				{title}
			</h3>
			<p className='text-xs sm:text-base text-gray-600'>{description}</p>
		</motion.div>
	);
}
