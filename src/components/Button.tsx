'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'outline';
	onClick?: () => void;
}

export default function Button({
	children,
	className = '',
	variant = 'primary',
	onClick,
}: ButtonProps) {
	const baseStyles = 'px-6 py-3 rounded-full font-semibold btn-hover shadow-md';

	const variants = {
		primary: 'gold-gradient text-deep-blue',
		secondary: 'border-2 border-white text-white',
		outline: 'border-2 border-amber-700 text-amber-700',
	};

	return (
		<motion.button
			className={`${baseStyles} ${variants[variant]} ${className}`}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.15 },
			}}
			whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
