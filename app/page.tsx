import {
	Navbar,
	Hero,
	Features,
	HowItWorks,
	Membership,
	CTA,
	Footer,
} from '@/components';

export default function Home() {
	return (
		<div className='flex flex-col flex-1 bg-white'>
			<Navbar />
			<Hero />
			<Features />
			<HowItWorks />
			<Membership />
			<CTA />
			<Footer />
		</div>
	);
}
