'use client';

import { UserPlus, TrendUp, ShareNetwork, Users } from '@phosphor-icons/react';
import { Navbar, Footer, PageHeader, StepCard, CTA } from '@/components';

const steps = [
	{
		icon: <UserPlus size={40} weight='duotone' />,
		step: '1',
		title: 'Join the Ecosystem',
		desc: 'Create your place in the Bullionaire community and get access to a gold-focused platform built around savings, education, and participation.',
	},
	{
		icon: <TrendUp size={40} weight='duotone' />,
		step: '2',
		title: 'Start Your Gold Journey',
		desc: 'Engage with the Bullionaire savings model and begin building exposure to a real-asset story that has served economies and investors for centuries.',
	},
	{
		icon: <ShareNetwork size={40} weight='duotone' />,
		step: '3',
		title: 'Share the Opportunity',
		desc: 'Introduce others to the value of gold, the Bullionaire platform, and the benefits of participating in a product-led community.',
	},
	{
		icon: <Users size={40} weight='duotone' />,
		step: '4',
		title: 'Grow with the Network',
		desc: 'As Bullionaire expands through real usage and community participation, members can take part in a wider movement built around education, access, and responsible growth.',
	},
];

export default function HowItWorks() {
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />

			<div className='pt-14 sm:pt-16'>
				<PageHeader
					eyebrow='How Bullionaire Works'
					title='A Community-Led Gold Platform'
					description='Bullionaire combines a gold-focused product story with a community-led sharing model designed to help more people discover and participate in real value.'
				/>

				{/* Steps */}
				<section className='py-20 sm:py-24 bg-white'>
					<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='space-y-8'>
							{steps.map((item, index) => (
								<StepCard key={index} {...item} index={index} horizontal />
							))}
						</div>

						<div className='mt-16 p-6 bg-amber-50 border border-amber-200 rounded-xl'>
							<p className='text-amber-800 text-sm leading-relaxed'>
								<strong>Compliance Note:</strong> This section is intentionally
								framed around product engagement and customer participation, not
								income promises. That is the safer way to position it publicly.
								FTC guidance is explicit that misleading or unsubstantiated
								earnings claims are a risk area for MLM businesses and
								participants.
							</p>
						</div>
					</div>
				</section>

				<CTA
					title='Ready to Start Your Gold Journey?'
					description='Join Bullionaire and become part of a growing gold-focused ecosystem built around value, education, and community.'
				/>

				<Footer />
			</div>
		</div>
	);
}
