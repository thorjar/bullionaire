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
			className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl'
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, delay }}
			whileHover={{
				y: -8,
				transition: { duration: 0.2 },
			}}
		>
			<motion.div
				className='w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mb-6'
				whileHover={{
					scale: 1.1,
					rotate: 5,
					transition: { duration: 0.2 },
				}}
			>
				{icon}
			</motion.div>
			<h3 className='text-2xl font-bold text-deep-blue mb-3'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</motion.div>
	);
}
