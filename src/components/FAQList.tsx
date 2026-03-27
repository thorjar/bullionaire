'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQListProps {
	items: FAQItem[];
}

export default function FAQList({ items }: FAQListProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className='space-y-3 sm:space-y-4'>
			{items.map((faq, index) => (
				<motion.div
					key={index}
					className='bg-gray-50 rounded-xl overflow-hidden'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<button
						className='w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-gray-100 transition-colors'
						onClick={() => setOpenIndex(openIndex === index ? null : index)}
					>
						<span className='font-semibold text-deep-blue text-sm sm:text-base'>
							{faq.question}
						</span>
						<CaretDown
							size={20}
							weight='bold'
							className={`text-deep-blue flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
						/>
					</button>
					{openIndex === index && (
						<div className='px-4 sm:px-6 pb-4 sm:pb-5'>
							<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
								{faq.answer}
							</p>
						</div>
					)}
				</motion.div>
			))}
		</div>
	);
}
