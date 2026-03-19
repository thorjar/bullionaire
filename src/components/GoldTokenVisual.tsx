'use client';

import { motion } from 'framer-motion';

export default function GoldTokenVisual() {
	return (
		<div className='relative w-full max-w-md mx-auto h-80 flex items-center justify-center'>
			{/* Glow effect behind */}
			<motion.div
				className='absolute inset-0 gold-gradient rounded-full blur-3xl opacity-20'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.15, 0.25, 0.15],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			{/* Flat Gold Bar */}
			<motion.div
				className='absolute'
				initial={{ opacity: 0, scale: 0, y: 0 }}
				animate={{
					opacity: [0, 1, 1, 1, 0, 0, 0, 0, 0],
					scale: [0, 1, 1, 1, 0, 0, 0, 0, 0],
					y: [0, 0, -10, -10, 0, 0, 0, 0, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeOut',
					times: [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 0.95, 1],
				}}
			>
				{/* Gold Bar - Flat 2D design */}
				<div className='relative w-72 h-32 gold-gradient rounded-xl shadow-2xl overflow-hidden border-4 border-yellow-300/60'>
					{/* Shine overlay */}
					<div className='absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20' />

					{/* Inner border ring */}
					<div className='absolute inset-4 border-2 border-white/40 rounded-lg' />

					{/* Center content */}
					<div className='absolute inset-0 flex items-center justify-center'>
						<div className='text-center relative z-10'>
							<span
								className='text-deep-blue font-bold text-3xl block'
								style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}
							>
								BULLION
							</span>
							<div className='text-deep-blue/70 text-xs font-bold tracking-widest mt-1'>
								999.9 GOLD
							</div>
						</div>
					</div>

					{/* Rotating outer ring */}
					<motion.div
						className='absolute inset-1 border border-dashed border-white/50 rounded-full'
						animate={{ rotate: 360 }}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
				</div>
			</motion.div>

			{/* Digital Token */}
			<motion.div
				className='absolute'
				initial={{ opacity: 0, scale: 0, y: 0 }}
				animate={{
					opacity: [0, 0, 0, 0, 1, 1, 1, 1, 0],
					scale: [0, 0, 0, 0, 1, 1, 1, 1, 0],
					y: [0, 0, 0, 0, 0, -10, -10, -10, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeOut',
					times: [0, 0.15, 0.25, 0.3, 0.4, 0.6, 0.7, 0.85, 1],
				}}
			>
				{/* Token Circle */}
				<div className='relative'>
					{/* Outer glow */}
					<div className='absolute inset-0 gold-gradient rounded-full blur-xl opacity-40' />

					{/* Main token */}
					<div className='w-40 h-40 gold-gradient rounded-full shadow-2xl relative overflow-hidden border-4 border-yellow-300/60'>
						{/* Inner ring */}
						<div className='absolute inset-3 border-2 border-white/40 rounded-full' />

						{/* Radial gradient overlay */}
						<div className='absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20' />

						{/* Center content */}
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='text-center relative z-10'>
								<span
									className='text-deep-blue font-bold text-3xl block'
									style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}
								>
									BULL
								</span>
								<div className='text-deep-blue/80 text-xs font-bold tracking-widest mt-1'>
									GOLD
								</div>
							</div>
						</div>

						{/* Rotating outer ring */}
						<motion.div
							className='absolute inset-1 border border-dashed border-white/50 rounded-full'
							animate={{ rotate: 360 }}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: 'linear',
							}}
						/>
					</div>
				</div>
			</motion.div>

			{/* Morph glow between bar and token */}
			<motion.div
				className='absolute'
				initial={{ opacity: 0 }}
				animate={{
					opacity: [0, 0, 0, 0.3, 0.6, 0.3, 0, 0, 0],
					scale: [0.5, 1, 1, 1.2, 1.5, 2, 1.5, 0.5, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					times: [0, 0.15, 0.25, 0.3, 0.35, 0.4, 0.5, 0.8, 1],
				}}
			>
				<div className='w-48 h-48 gold-gradient rounded-full blur-2xl opacity-30' />
			</motion.div>

			{/* Custodian Audit Badge - fades in first */}
			<motion.div
				className='absolute -bottom-2 -right-6 bg-white rounded-full p-3 shadow-2xl border-2 border-gold'
				initial={{ scale: 0, rotate: -180, y: 0 }}
				animate={{
					opacity: [0, 0, 0, 0, 0, 1, 1, 1, 0],
					scale: [0, 0, 0, 0, 0, 1, 1, 1, 0],
					y: [0, 0, 0, 0, 0, 0, -8, -8, 0],
					rotate: [-180, -180, -180, -180, -180, 0, 0, 0, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeOut',
					times: [0, 0.15, 0.25, 0.3, 0.4, 0.5, 0.7, 0.85, 1],
				}}
			>
				<div className='w-14 h-14 flex items-center justify-center'>
					<div className='text-center'>
						{/* Shield icon */}
						<svg
							className='w-7 h-7 mx-auto text-gold-dark'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
								clipRule='evenodd'
							/>
						</svg>
						<div className='text-[10px] font-bold text-deep-blue mt-0.5'>
							AUDITED
						</div>
					</div>
				</div>
			</motion.div>

			{/* 100% Backed Badge - fades in second */}
			<motion.div
				className='absolute -top-3 -left-6 bg-deep-blue text-white rounded-full px-4 py-2 shadow-2xl border-2 border-gold/50'
				initial={{ scale: 0, y: -20 }}
				animate={{
					opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0],
					scale: [0, 0, 0, 0, 0, 0, 1, 1, 0],
					y: [-20, -20, -20, -20, -20, -20, -8, -8, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeOut',
					times: [0, 0.15, 0.25, 0.3, 0.4, 0.6, 0.7, 0.85, 1],
				}}
			>
				<div className='text-center'>
					<div className='text-sm font-bold text-gold'>100%</div>
					<div className='text-[10px] tracking-wide'>BACKED</div>
				</div>
			</motion.div>

			{/* Floating particles */}
			{[...Array(8)].map((_, i) => (
				<motion.div
					key={i}
					className='absolute w-2 h-2 bg-gold rounded-full shadow-lg'
					style={{
						left: `${10 + i * 12}%`,
						top: `${15 + ((i * 17) % 60)}%`,
					}}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1.5, 0],
						y: [0, -20, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatDelay: 0.5,
						delay: i * 0.25,
						ease: 'easeInOut',
					}}
				/>
			))}
		</div>
	);
}
