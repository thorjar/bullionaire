'use client';

import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { Navbar, Footer, PageHeader, Button } from '@/components';

export default function Join() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Join request:', { name, email });
	};

	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />

			<div className='pt-14 sm:pt-16'>
				<PageHeader
					eyebrow='Join Now'
					title='Secure Your Spot Today'
					description='Join Bullionaire and become part of a growing gold-focused ecosystem built around value, education, and community.'
					align='center'
				/>

				{/* Join Form */}
				<section className='py-20 sm:py-24 bg-gray-50'>
					<div className='max-w-md mx-auto px-4 sm:px-6 lg:px-8'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Full Name
								</label>
								<input
									type='text'
									id='name'
									value={name}
									onChange={e => setName(e.target.value)}
									className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'
									placeholder='Enter your name'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Email Address
								</label>
								<input
									type='email'
									id='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'
									placeholder='Enter your email'
									required
								/>
							</div>

							<Button type='submit' className='w-full py-4 text-lg'>
								<span className='flex items-center gap-2 justify-center'>
									Create My Account
									<ArrowRight weight='bold' size={18} />
								</span>
							</Button>

							<p className='text-center text-sm text-gray-500 pt-4'>
								Already have an account?{' '}
								<a
									href='#'
									className='text-gold-dark hover:underline font-medium'
								>
									Sign in
								</a>
							</p>
						</form>

						<div className='mt-12 text-center'>
							<p className='text-gray-600 mb-4'>Want to learn more first?</p>
							<a
								href='/how-it-works'
								className='text-gold-dark hover:underline font-medium'
							>
								Learn More Before Joining
							</a>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className='py-16 deep-blue-gradient'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						<p className='text-gold text-lg font-semibold mb-4'>
							Start with something real. Start with Bullionaire.
						</p>
					</div>
				</section>

				<Footer />
			</div>
		</div>
	);
}
