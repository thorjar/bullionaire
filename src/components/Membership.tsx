'use client';

import { motion } from 'framer-motion';
import MembershipCard from './MembershipCard';

const membershipTiers = [
	{
		name: 'Bronze',
		price: 'Free',
		features: [
			'Access to education modules',
			'Basic token allocation',
			'Community access',
			'Monthly newsletter',
		],
		buttonText: 'Join Free',
		buttonVariant: 'outline' as const,
		borderClass: 'border-amber-700',
		titleClass: 'text-amber-700',
		delay: 0,
	},
	{
		name: 'Silver',
		price: '$99',
		features: [
			'Everything in Bronze',
			'+25% token bonus',
			'Priority minting access',
			'Weekly market insights',
			'Silver member community',
		],
		buttonText: 'Get Silver',
		buttonVariant: 'primary' as const,
		borderClass: 'border-gray-400',
		titleClass: 'text-gray-500',
		isPopular: true,
		delay: 0.1,
	},
	{
		name: 'Gold',
		price: '$299',
		features: [
			'Everything in Silver',
			'+50% token bonus',
			'VIP priority minting',
			'Daily audit reports',
			'1-on-1 investment consulting',
			'Exclusive events access',
		],
		buttonText: 'Get Gold',
		buttonVariant: 'outline' as const,
		borderClass: 'border-gold',
		titleClass: 'gold-text-gradient',
		delay: 0.2,
	},
];

export default function Membership() {
	return (
		<section id='membership' className='py-16 sm:py-20 md:py-24 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-12 sm:mb-16'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-3xl sm:text-4xl font-bold text-deep-blue mb-4'>
						Membership Tiers
					</h2>
					<p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
						Choose your level of access and unlock exclusive benefits
					</p>
				</motion.div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto'>
					{membershipTiers.map(tier => (
						<MembershipCard key={tier.name} {...tier} />
					))}
				</div>
			</div>
		</section>
	);
}
