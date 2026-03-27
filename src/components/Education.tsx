'use client';

import { motion } from 'framer-motion';
import {
	BookOpen,
	Lightbulb,
	GraduationCap,
	ChartBar,
} from '@phosphor-icons/react';

const tools = [
	{
		icon: <BookOpen size={32} weight='duotone' />,
		title: 'Learning Tools',
		description:
			'Interactive content to understand gold and value preservation.',
	},
	{
		icon: <Lightbulb size={32} weight='duotone' />,
		title: 'Financial Awareness',
		description: 'Build confidence through practical financial education.',
	},
	{
		icon: <GraduationCap size={32} weight='duotone' />,
		title: 'Self-Sustainability',
		description:
			'Empowerment starts with understanding fundamental principles.',
	},
	{
		icon: <ChartBar size={32} weight='duotone' />,
		title: 'Clear Resources',
		description: 'Simpler, clearer access to financial literacy concepts.',
	},
];

export default function Education() {
	return (
		<section
			id='education'
			className='py-16 sm:py-20 md:py-24 lg:py-28 bg-deep-blue text-white'
		>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
					>
						<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4'>
							Education First
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tight'>
							Empowerment Through Knowledge
						</h2>
						<p className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed'>
							Bullionaire is not only about access to gold. It is also about
							helping people become more financially aware, more confident, and
							more self-sustainable.
						</p>
						<p className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed'>
							We believe that real empowerment starts with education. That is
							why Bullionaire is being built with tools, content, and resources
							designed to help everyday people better understand gold, savings,
							value preservation, and the broader principles of financial
							literacy.
						</p>
						<p className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed'>
							Our mission is to make these ideas simpler, clearer, and more
							accessible — so that more people can take meaningful steps toward
							stronger financial foundations.
						</p>
						<div className='bg-gold/20 p-4 sm:p-6 rounded-xl border border-gold/30'>
							<p className='text-gold font-semibold text-base sm:text-lg'>
								&quot;When people understand value better, they make stronger
								decisions for the future.&quot;
							</p>
						</div>
					</motion.div>

					<motion.div
						className='grid sm:grid-cols-2 gap-4 sm:gap-6'
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{tools.map((tool, index) => (
							<div
								key={index}
								className='bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20'
							>
								<div className='text-gold mb-3 sm:mb-4'>{tool.icon}</div>
								<h3 className='text-base sm:text-lg font-semibold mb-2'>
									{tool.title}
								</h3>
								<p className='text-gray-300 text-sm leading-relaxed'>
									{tool.description}
								</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
