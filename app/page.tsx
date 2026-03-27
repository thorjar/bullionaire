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
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />
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
	);
}
