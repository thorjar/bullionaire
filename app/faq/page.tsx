'use client';

import { Navbar, Footer, PageHeader, FAQList, CTA } from '@/components';

const faqs = [
	{
		question: 'What is Bullionaire?',
		answer:
			'Bullionaire is a gold-focused savings and community platform designed to help people engage with the long-term value story of gold in a more accessible and modern way.',
	},
	{
		question: 'Why gold?',
		answer:
			"Gold remains one of the world's most recognised stores of value and continues to be strategically important to both investors and central banks. Record demand in 2025 reinforced that gold remains highly relevant in today's economy.",
	},
	{
		question: 'Is Bullionaire product-led?',
		answer:
			'That is how it should be positioned and operated. In network-based business models, regulators focus heavily on whether there is real product value and real customer demand beyond recruitment activity.',
	},
	{
		question: 'Does Bullionaire guarantee income?',
		answer:
			'No. Any responsible business should avoid guaranteed income language. Public earnings claims must be accurate, truthful, and properly substantiated.',
	},
	{
		question: 'Who is Bullionaire for?',
		answer:
			'Bullionaire is for people who value real assets, want to understand gold better, and want to participate in a community built on substance rather than hype.',
	},
	{
		question: 'Why join now?',
		answer:
			"Because gold's relevance is strengthening again, and early participation in a strong product-led platform can be strategically meaningful when the foundation makes sense to you.",
	},
];

export default function FAQ() {
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />

			<div className='pt-14 sm:pt-16'>
				<PageHeader eyebrow='FAQ' title='Frequently Asked Questions' />

				<section className='py-20 sm:py-24 bg-white'>
					<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
						<FAQList items={faqs} />
					</div>
				</section>

				<CTA
					title='Still Have Questions?'
					description='Our team is here to help you understand the Bullionaire opportunity.'
					buttonText='Contact Us'
				/>

				<Footer />
			</div>
		</div>
	);
}
