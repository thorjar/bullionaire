'use client';

import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck } from '@phosphor-icons/react';
import { Navbar, Footer, PageHeader, CTA } from '@/components';

const visionMission = [
	{
		icon: <Target size={28} weight='duotone' />,
		title: 'Our Vision',
		content:
			'To build a trusted gold-focused platform that helps more people participate in tangible value through savings, education, and responsible community growth.',
	},
	{
		icon: <Heart size={28} weight='duotone' />,
		title: 'Our Mission',
		content:
			'To connect timeless asset principles with modern access by creating a product-led ecosystem where gold, knowledge, and community work together.',
	},
];

export default function About() {
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />

			<div className='pt-14 sm:pt-16'>
				<PageHeader
					eyebrow='About Bullionaire'
					title='Built on Substance, Not Hype'
					description='Bullionaire was founded on a simple belief: people are looking for something more grounded. In a world of digital noise, short-term speculation, and financial uncertainty, gold continues to represent trust, scarcity, and long-term value.'
				/>

				{/* Vision & Mission */}
				<section className='py-20 sm:py-24 bg-white'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='grid md:grid-cols-2 gap-12'>
							{visionMission.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
								>
									<div className='flex items-center gap-3 mb-4'>
										<div className='w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-deep-blue'>
											{item.icon}
										</div>
										<h2 className='text-2xl font-bold text-deep-blue'>
											{item.title}
										</h2>
									</div>
									<p className='text-gray-600 leading-relaxed'>
										{item.content}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Philosophy */}
				<section className='py-20 sm:py-24 bg-gray-50'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6 }}
						>
							<div className='flex items-center gap-3 mb-6'>
								<div className='w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-deep-blue'>
									<ShieldCheck size={28} weight='duotone' />
								</div>
								<h2 className='text-2xl font-bold text-deep-blue'>
									Our Philosophy
								</h2>
							</div>
							<p className='text-lg text-gray-600 mb-8 leading-relaxed'>
								Bullionaire is intended to stand for clarity, accessibility, and
								real value. We believe trust is earned through honest
								communication, meaningful products, and responsible growth.
							</p>
							<div className='bg-deep-blue text-white p-8 rounded-2xl'>
								<p className='text-gray-200 leading-relaxed italic'>
									Bullionaire was created to bridge an important gap: the gap
									between old-world value and modern participation. We saw a
									need for a platform that helps ordinary people reconnect with
									real assets while benefiting from the reach and power of
									modern communities.
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				<CTA
					title='Join the Movement Today'
					description='Start with something real. Start with Bullionaire.'
				/>

				<Footer />
			</div>
		</div>
	);
}
