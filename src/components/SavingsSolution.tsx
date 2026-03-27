'use client';

import { motion } from 'framer-motion';
import { PiggyBank, Clock, Diamond, LockKey } from '@phosphor-icons/react';

const points = [
	{
		icon: <PiggyBank size={28} weight='duotone' />,
		title: 'Tangible Savings Mindset',
		description:
			'Move beyond short-term spending to building with greater intention.',
	},
	{
		icon: <Clock size={28} weight='duotone' />,
		title: 'Long-Term Value',
		description:
			'Preserve value and build stronger financial habits over time.',
	},
	{
		icon: <Diamond size={28} weight='duotone' />,
		title: 'Real Assets',
		description: 'A practical introduction to tangible, timeless assets.',
	},
	{
		icon: <LockKey size={28} weight='duotone' />,
		title: 'Financial Security',
		description: 'A disciplined way to think about long-term stability.',
	},
];

export default function SavingsSolution() {
	return (
		<section id='savings' className='py-16 sm:py-20 md:py-24 lg:py-28 bg-white'>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<motion.div
					className='text-center mb-12 sm:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
				>
					<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4'>
						A Smarter Way to Save
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight px-2'>
						More Than Putting Money Aside
					</h2>
					<p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4'>
						Saving should not only be about putting money aside. It should also
						be about preserving value and building stronger financial habits
						over time.
					</p>
					<p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4'>
						Bullionaire approaches gold as a practical savings solution for
						people who want to think beyond short-term spending and begin
						building with greater intention. Gold offers a different kind of
						savings mindset — one rooted in discipline, tangibility, and
						long-term awareness.
					</p>
					<p className='text-base sm:text-lg text-gray-600 mb-8 leading-relaxed px-4'>
						This is not about hype or speculation. It is about helping people
						reconnect with a timeless asset in a format that feels relevant to
						modern life.
					</p>
				</motion.div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{points.map((point, index) => (
						<motion.div
							key={index}
							className='text-center p-4 sm:p-6'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className='w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-deep-blue'>
								{point.icon}
							</div>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								{point.title}
							</h3>
							<p className='text-gray-600 text-sm leading-relaxed'>
								{point.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
