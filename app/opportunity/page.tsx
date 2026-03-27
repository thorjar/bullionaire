'use client';

import { CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { Navbar, Footer, PageHeader, CTA } from '@/components';

const bullets = [
	'Access a gold-focused savings ecosystem',
	'Join a product-led community',
	'Share a story built on real asset relevance',
	'Participate in a platform designed for long-term growth',
	'Build with trust, clarity, and value at the centre',
];

export default function Opportunity() {
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />

			<div className='pt-14 sm:pt-16'>
				<PageHeader
					eyebrow='The Bullionaire Opportunity'
					title='Participate in Real Value'
					description='Bullionaire offers members the opportunity to participate in a modern gold-focused ecosystem and to help expand that ecosystem by sharing its value with others.'
				/>

				{/* Core Body */}
				<section className='py-20 sm:py-24 bg-white'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
						<p className='text-lg text-gray-600 mb-8 leading-relaxed'>
							The Bullionaire opportunity begins with the product story: gold,
							education, access, and community. Any member participation model
							should always be understood in that order. The strongest
							businesses in this space are built on real customer value,
							transparent communication, and sustainable growth.
						</p>
						<p className='text-lg text-gray-600 mb-12 leading-relaxed'>
							Bullionaire is for people who want to be early in a platform built
							around tangible value and modern network effects. It is not about
							hype. It is about helping people reconnect with something enduring
							and sharing that story in a structured, responsible way.
						</p>

						<div className='grid sm:grid-cols-2 gap-6 mb-12'>
							{bullets.map((item, index) => (
								<div key={index} className='flex items-start gap-3'>
									<CheckCircle
										weight='fill'
										size={24}
										className='text-gold-dark flex-shrink-0 mt-0.5'
									/>
									<span className='text-gray-700'>{item}</span>
								</div>
							))}
						</div>

						<div className='bg-amber-50 border border-amber-200 p-6 rounded-xl'>
							<div className='flex items-start gap-3'>
								<WarningCircle
									weight='fill'
									size={24}
									className='text-amber-600 flex-shrink-0 mt-0.5'
								/>
								<div>
									<h3 className='font-semibold text-amber-800 mb-2'>
										Important Notice
									</h3>
									<p className='text-amber-700 text-sm leading-relaxed'>
										Bullionaire does not make guaranteed income claims or
										exaggerated lifestyle representations. Any explanation of
										member rewards is accurate, substantiated, and supported by
										formal compensation documentation and applicable law.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<CTA
					title='Start Your Gold Journey'
					description='Join a platform built on substance, transparency, and real value.'
				/>

				<Footer />
			</div>
		</div>
	);
}
