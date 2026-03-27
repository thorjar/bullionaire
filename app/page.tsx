'use client';

import { useEffect } from 'react';
import {
	Navbar,
	Hero,
	WhyGold,
	Economy,
	SavingsSolution,
	Education,
	LockIn,
	Partners,
	PrivateLaunch,
	Footer,
} from '@/components';

export default function Home() {
	// Clear hash from URL and scroll to top on mount
	useEffect(() => {
		if (window.location.hash) {
			history.replaceState(null, '', window.location.pathname);
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />
			<div className='pt-14 sm:pt-16'>
				<Hero />
				<WhyGold />
				<Economy />
				<SavingsSolution />
				<Education />
				<LockIn />
				<Partners />
				<PrivateLaunch />
				<Footer />
			</div>
		</div>
	);
}
