import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'BULLIONAIRE | Gold-Backed Digital Coin',
	description:
		"100% backed by physical gold reserves. Educate, mint, prosper. The world's first gold-backed digital token.",
	keywords: [
		'gold-backed crypto',
		'digital gold',
		'BULL token',
		'gold investing',
		'blockchain',
	],
	icons: {
		icon: '/logo.svg',
		apple: '/logo.svg',
	},
	openGraph: {
		title: 'BULLIONAIRE | Gold-Backed Digital Coin',
		description:
			'100% backed by physical gold reserves. Educate, mint, prosper.',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
