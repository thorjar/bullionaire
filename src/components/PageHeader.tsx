'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
	eyebrow: string;
	title: string;
	description?: string;
	align?: 'left' | 'center';
}

export default function PageHeader({
	eyebrow,
	title,
	description,
	align = 'center',
}: PageHeaderProps) {
	return (
		<section className='py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white'>
			<div
				className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${align === 'center' ? 'text-center' : 'text-left'}`}
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6'>
						{eyebrow}
					</span>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-deep-blue mb-4 sm:mb-6 md:mb-8 tracking-tight px-2'>
						{title}
					</h1>
					{description && (
						<p className='text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-2'>
							{description}
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
}
