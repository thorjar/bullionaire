'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LockKey } from '@phosphor-icons/react';
import Button from './Button';
import { useState, FormEvent } from 'react';

export default function PrivateLaunch() {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<
		'idle' | 'submitting' | 'success' | 'error'
	>('idle');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus('submitting');

		try {
			// Using Next.js API route - see /app/api/subscribe/route.ts
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				setStatus('success');
				setEmail('');
			} else {
				setStatus('error');
			}
		} catch (error) {
			console.error('Subscription error:', error);
			setStatus('error');
		}
	};

	return (
		<section
			id='private-launch'
			className='py-16 sm:py-20 md:py-24 lg:py-28 deep-blue-gradient overflow-hidden'
		>
			<div className='max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gold/20 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6'>
						<LockKey weight='bold' size={14} className='sm:hidden' />
						<LockKey weight='bold' size={16} className='hidden sm:inline' />
						Private Launch
					</div>
				</motion.div>

				<motion.h2
					className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					Join Our Select Group
				</motion.h2>

				<motion.p
					className='text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Bullionaire is currently being introduced in a private launch phase
					with a select group of individuals. This first version is focused on
					building the right foundation, refining the experience, and bringing
					together early participants who align with the vision of tangible
					value, financial education, and long-term thinking.
				</motion.p>

				<motion.form
					onSubmit={handleSubmit}
					className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto px-4'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<input
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						disabled={status === 'submitting' || status === 'success'}
						className='w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white border border-white/20 text-deep-blue placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition-all disabled:opacity-50 text-sm sm:text-base'
						required
					/>
					<Button
						type='submit'
						disabled={status === 'submitting' || status === 'success'}
						className='px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium whitespace-nowrap w-full sm:w-auto'
					>
						{status === 'submitting' ? (
							'Submitting...'
						) : status === 'success' ? (
							'✓ You are in!'
						) : (
							<span className='flex items-center gap-1 sm:gap-2'>
								Request Access
								<ArrowRight weight='bold' size={16} className='sm:hidden' />
								<ArrowRight
									weight='bold'
									size={18}
									className='hidden sm:inline'
								/>
							</span>
						)}
					</Button>
				</motion.form>

				{status === 'success' && (
					<motion.p
						className='text-green-400 text-sm mt-4 px-4'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						Thank you! We&apos;ll be in touch soon.
					</motion.p>
				)}

				{status === 'error' && (
					<motion.p
						className='text-red-400 text-sm mt-4 px-4'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						Something went wrong. Please try again.
					</motion.p>
				)}
			</div>
		</section>
	);
}
