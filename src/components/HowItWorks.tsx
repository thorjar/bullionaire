'use client';

import { motion } from 'framer-motion';
import StepCard from './StepCard';

const steps = [
	{
		step: '1',
		title: 'Join Waitlist',
		description: 'Sign up for early access and launch bonuses',
	},
	{
		step: '2',
		title: 'Complete Education',
		description: 'Learn gold investing through interactive modules',
	},
	{
		step: '3',
		title: 'Choose Membership',
		description: 'Select your tier for exclusive perks',
	},
	{
		step: '4',
		title: 'Mint BULL',
		description: 'Receive your gold-backed tokens',
	},
];

export default function HowItWorks() {
	return (
		<section id='how-it-works' className='py-16 sm:py-20 md:py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-12 sm:mb-16'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-3xl sm:text-4xl font-bold text-deep-blue mb-4'>
						How It Works
					</h2>
					<p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
						From digital innovation to tangible gold stability
					</p>
				</motion.div>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
					{steps.map((item, index) => (
						<StepCard key={index} {...item} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
