'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

export default function CTA() {
	const [email, setEmail] = useState('');

	return (
		<section className='blue-gradient py-24'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.h2
					className='text-4xl md:text-5xl font-bold text-white mb-6'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
				>
					Ready to Own Gold, Digitally?
				</motion.h2>
				<motion.p
					className='text-xl text-gray-200 mb-8'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					Join the waitlist now for exclusive launch perks and early access to
					BULL tokens.
				</motion.p>
				<motion.div
					className='flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto'
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<input
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full px-6 py-4 rounded-full text-deep-blue focus:outline-none focus:ring-2 focus:ring-gold'
					/>
					<Button className='px-8 py-4 text-lg shadow-xl whitespace-nowrap'>
						Join Waitlist
					</Button>
				</motion.div>
				<motion.p
					className='text-sm text-gray-300 mt-4'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					Early birds get free education modules & potential airdrop
				</motion.p>
			</div>
		</section>
	);
}
