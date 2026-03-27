'use client';

import { motion } from 'framer-motion';
import { ChartLineDown, ShieldCheck, Lock } from '@phosphor-icons/react';

export default function Economy() {
	return (
		<section
			id='economy'
			className='py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50'
		>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
					>
						<span className='inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/20 text-deep-blue text-xs sm:text-sm font-semibold rounded-full mb-4'>
							A Changing Economy
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue mb-4 sm:mb-6 tracking-tight'>
							Calls for Real Assets
						</h2>
						<p className='text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
							Today&apos;s economic environment is shaped by inflation concerns,
							currency pressure, market volatility, and growing uncertainty
							across global systems. As purchasing power is tested and
							confidence shifts, more people are asking an important question:
							how do I protect value over time?
						</p>
						<p className='text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
							Gold has long been viewed as a hedge in uncertain conditions
							because it is not dependent on the strength of any single
							currency, institution, or market cycle. It is often revisited when
							people seek resilience, diversification, and a more stable
							foundation for saving.
						</p>
						<div className='bg-deep-blue text-white p-4 sm:p-6 rounded-xl'>
							<p className='text-gold font-semibold text-base sm:text-lg italic'>
								&quot;When the world feels uncertain, real assets matter
								more.&quot;
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
						<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
							<ChartLineDown
								size={36}
								weight='duotone'
								className='text-gold-dark mb-3 sm:mb-4'
							/>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								Inflation Concerns
							</h3>
							<p className='text-gray-600 text-sm'>
								Protecting purchasing power in changing economic conditions.
							</p>
						</div>
						<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
							<ShieldCheck
								size={36}
								weight='duotone'
								className='text-gold-dark mb-3 sm:mb-4'
							/>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								Currency Pressure
							</h3>
							<p className='text-gray-600 text-sm'>
								Diversifying beyond single currency dependency.
							</p>
						</div>
						<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
							<Lock
								size={36}
								weight='duotone'
								className='text-gold-dark mb-3 sm:mb-4'
							/>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								Market Volatility
							</h3>
							<p className='text-gray-600 text-sm'>
								Seeking stability amid unpredictable market cycles.
							</p>
						</div>
						<div className='bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100'>
							<ShieldCheck
								size={36}
								weight='duotone'
								className='text-gold-dark mb-3 sm:mb-4'
							/>
							<h3 className='text-base sm:text-lg font-semibold text-deep-blue mb-2'>
								Resilience
							</h3>
							<p className='text-gray-600 text-sm'>
								Building a more stable foundation for saving.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
