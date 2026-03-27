'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import Button from './Button';
import { CTASectionProps } from '.';

interface CTAProps {
	title: string;
	subtitle?: string;
	description: string;
	buttonText?: string;
	buttonHref?: string;
}

export type { CTAProps as CTASectionProps };

export default function CTA({
	title,
	subtitle,
	description,
	buttonText = 'Join Now',
	buttonHref = '/join',
}: CTASectionProps) {
	return (
		<section className='py-20 sm:py-24 md:py-28 deep-blue-gradient'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
				>
					{subtitle && (
						<p className='text-xl text-gold mb-4 font-semibold'>{subtitle}</p>
					)}
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
						{title}
					</h2>
					<p className='text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed'>
						{description}
					</p>
					<div className='flex justify-center'>
						<Button
							className='px-10 py-5 text-lg'
							onClick={() => (window.location.href = buttonHref)}
						>
							<span className='flex items-center gap-2'>
								{buttonText}
								<ArrowRight weight='bold' size={20} />
							</span>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
