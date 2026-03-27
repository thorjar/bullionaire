'use client';

import { motion } from 'framer-motion';

interface StepCardProps {
	icon: React.ReactNode;
	step: string;
	title: string;
	desc: string;
	index: number;
	horizontal?: boolean;
}

export default function StepCard({
	icon,
	step,
	title,
	desc,
	index,
	horizontal = false,
}: StepCardProps) {
	if (horizontal) {
		return (
			<motion.div className='flex gap-4 sm:gap-6 items-start p-4 sm:p-6 bg-gray-50 rounded-2xl'>
				<div className='flex-shrink-0'>
					<div className='w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-2xl flex items-center justify-center text-deep-blue'>
						{icon}
					</div>
				</div>
				<div className='flex-1'>
					<div className='flex items-center gap-2 sm:gap-3 mb-2'>
						<span className='w-7 h-7 sm:w-8 sm:h-8 bg-gold-dark text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0'>
							{step}
						</span>
						<h3 className='text-base sm:text-xl font-semibold text-deep-blue'>
							{title}
						</h3>
					</div>
					<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
						{desc}
					</p>
				</div>
			</motion.div>
		);
	}

	return (
		<motion.div className='text-center p-4 sm:p-6'>
			<div className='w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-deep-blue text-xl sm:text-2xl font-bold'>
				{step}
			</div>
			<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
				{title}
			</h3>
			<p className='text-sm text-gray-600 leading-relaxed'>{desc}</p>
		</motion.div>
	);
}
