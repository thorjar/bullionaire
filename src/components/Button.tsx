'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'outline';
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

export default function Button({
	children,
	className = '',
	variant = 'primary',
	onClick,
	type = 'button',
	disabled = false,
}: ButtonProps) {
	const baseStyles =
		'px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary:
			'gold-gradient text-deep-blue hover:opacity-90 shadow-lg hover:shadow-xl',
		secondary: 'bg-deep-blue text-white hover:bg-deep-blue-light shadow-md',
		outline:
			'border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white',
	};

	return (
		<motion.button
			type={type}
			disabled={disabled}
			className={`${baseStyles} ${variants[variant]} ${className}`}
			whileHover={disabled ? undefined : { scale: 1.02 }}
			whileTap={disabled ? undefined : { scale: 0.98 }}
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
