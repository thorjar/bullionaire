'use client';

import { motion } from 'framer-motion';
import {
	XLogo,
	InstagramLogo,
	LinkedinLogo,
	CaretRight,
	Info,
} from '@phosphor-icons/react';

const quickLinks = ['Why Gold', 'Economy', 'Education', 'Partners'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Disclosures'];

const socialIcons = [
	{ icon: <XLogo size={20} weight='bold' />, label: 'X/Twitter' },
	{ icon: <InstagramLogo size={20} weight='bold' />, label: 'Instagram' },
	{ icon: <LinkedinLogo size={20} weight='bold' />, label: 'LinkedIn' },
];

export default function Footer() {
	return (
		<footer className='bg-deep-blue text-white py-12 sm:py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12'>
					<motion.div
						className='sm:col-span-2 md:col-span-1'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className='flex items-center gap-2 sm:gap-3 mb-4'>
							<div className='w-9 h-9 sm:w-10 sm:h-10 gold-gradient rounded-xl flex items-center justify-center'>
								<span className='text-deep-blue font-bold text-base sm:text-lg'>
									B
								</span>
							</div>
							<span className='text-lg sm:text-xl font-bold'>BULLIONAIRE</span>
						</div>
						<p className='text-gray-400 text-sm leading-relaxed mb-4'>
							Bullionaire brings together gold, education, and modern access in
							one value-driven platform.
						</p>
						<div className='flex gap-2 sm:gap-3'>
							{socialIcons.map((social, index) => (
								<motion.a
									key={index}
									href='#'
									aria-label={social.label}
									className='w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gold hover:text-deep-blue transition-all'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h4 className='font-semibold mb-4 text-gray-300 text-sm sm:text-base'>
							Explore
						</h4>
						<ul className='space-y-2 sm:space-y-3'>
							{quickLinks.map(item => (
								<li key={item}>
									<motion.a
										href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
										className='text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group'
										whileHover={{ x: 4 }}
									>
										<CaretRight
											size={14}
											weight='bold'
											className='group-hover:text-gold transition-colors'
										/>
										{item}
									</motion.a>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h4 className='font-semibold mb-4 text-gray-300 text-sm sm:text-base'>
							Legal
						</h4>
						<ul className='space-y-2 sm:space-y-3'>
							{legalLinks.map(item => (
								<li key={item}>
									<motion.a
										href='#'
										className='text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group'
										whileHover={{ x: 4 }}
									>
										<CaretRight
											size={14}
											weight='bold'
											className='group-hover:text-gold transition-colors'
										/>
										{item}
									</motion.a>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h4 className='font-semibold mb-4 text-gray-300 text-sm sm:text-base'>
							Contact
						</h4>
						<ul className='space-y-2 sm:space-y-3 text-gray-400 text-sm'>
							<li>support@bullionaire.com</li>
							<li>Press inquiries welcome</li>
						</ul>
					</motion.div>
				</div>

				<motion.div
					className='border-t border-white/10 pt-6 sm:pt-8'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className='flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6 p-3 sm:p-4 bg-white/5 rounded-xl'>
						<Info
							size={18}
							weight='bold'
							className='text-gold flex-shrink-0 mt-0.5'
						/>
						<p className='text-gray-400 text-xs leading-relaxed'>
							Bullionaire is intended to be communicated as a product-led and
							education-led platform. Participation details, product
							information, and any related program structures should always be
							reviewed together with the applicable terms, disclosures, and
							official documentation. Nothing on this website should be
							interpreted as guaranteed income, financial advice, or an
							invitation to participate in any regulated investment product
							unless expressly stated otherwise.
						</p>
					</div>
					<p className='text-center text-gray-500 text-sm'>
						&copy; 2026 BULLIONAIRE. All rights reserved.
					</p>
					<p className='text-center text-gray-600 text-xs mt-2'>
						Every BULL token is 100% backed by physical gold reserves held in
						secure third-party custody.
					</p>
				</motion.div>
			</div>
		</footer>
	);
}
