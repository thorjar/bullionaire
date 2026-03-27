'use client';

import { motion } from 'framer-motion';
import {
	Handshake,
	Warehouse,
	GraduationCap,
	Cpu,
} from '@phosphor-icons/react';

const partners = [
	{
		icon: <Handshake size={40} weight='duotone' />,
		title: 'Strategic Partnerships',
		description: 'Credible infrastructure and trusted service relationships.',
	},
	{
		icon: <Warehouse size={40} weight='duotone' />,
		title: 'Storage & Security',
		description: 'Professional precious metals sourcing and secure custody.',
	},
	{
		icon: <GraduationCap size={40} weight='duotone' />,
		title: 'Education',
		description: 'Learning resources and financial literacy support.',
	},
	{
		icon: <Cpu size={40} weight='duotone' />,
		title: 'Technology',
		description: 'Modern systems for operational excellence.',
	},
];

export default function Partners() {
	return (
		<section
			id='partners'
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
						Built on Trusted Relationships
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight px-2'>
						Real Value Requires Real Infrastructure
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4'>
						Bullionaire is designed to stand on a foundation of credible
						infrastructure, trusted service relationships, and carefully
						selected strategic partners. These relationships matter because
						trust matters.
					</p>
				</motion.div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{partners.map((partner, index) => (
						<motion.div
							key={index}
							className='text-center p-4 sm:p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold/30 transition-all duration-300'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								y: -4,
								transition: { duration: 0.2 },
							}}
						>
							<div className='text-gold-dark mb-3 sm:mb-4 flex justify-center'>
								{partner.icon}
							</div>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								{partner.title}
							</h3>
							<p className='text-gray-600 text-sm leading-relaxed'>
								{partner.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
