'use client';

import { motion } from 'framer-motion';

interface MembershipTier {
	name: string;
	price: string;
	currency?: string;
	period?: string;
	features: string[];
	buttonText: string;
	buttonVariant: 'primary' | 'outline';
	borderClass: string;
	titleClass?: string;
	isPopular?: boolean;
	delay?: number;
}

import Button from './Button';

export default function MembershipCard({
	name,
	price,
	currency = '',
	period = '/month',
	features,
	buttonText,
	buttonVariant,
	borderClass,
	titleClass = 'text-deep-blue',
	isPopular = false,
	delay = 0,
}: MembershipTier) {
	return (
		<motion.div
			className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${borderClass} ${isPopular ? 'transform scale-105 shadow-xl' : ''}`}
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, delay }}
			whileHover={{
				y: -8,
				scale: isPopular ? 1.08 : 1.02,
				transition: { duration: 0.2 },
			}}
		>
			{isPopular && (
				<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 gold-gradient text-deep-blue px-4 py-1 rounded-full text-sm font-bold shadow-md'>
					MOST POPULAR
				</div>
			)}
			<div className='text-center mb-6'>
				<h3 className={`text-2xl font-bold mb-2 ${titleClass}`}>{name}</h3>
				<p className='text-4xl font-bold text-deep-blue'>
					{price}
					{currency && (
						<span className='text-lg font-normal text-gray-500'>
							{currency}
							{period}
						</span>
					)}
				</p>
			</div>
			<ul className='space-y-4 mb-8'>
				{features.map((feature, i) => (
					<motion.li
						key={i}
						className='flex items-center gap-3'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
					>
						<svg
							className='w-5 h-5 text-gold-dark flex-shrink-0'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='text-gray-600'>{feature}</span>
					</motion.li>
				))}
			</ul>
			<Button variant={buttonVariant} className='w-full'>
				{buttonText}
			</Button>
		</motion.div>
	);
}
