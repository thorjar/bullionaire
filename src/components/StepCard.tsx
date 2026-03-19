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
			initial={{ opacity: 0, x: 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
		>
			<div className='w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-deep-blue shadow-md'>
				{step}
			</div>
			<h3 className='text-xl font-bold text-deep-blue mb-2'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</motion.div>
	);
}
