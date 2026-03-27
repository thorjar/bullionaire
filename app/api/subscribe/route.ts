import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json();

		// Validate email
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json(
				{ error: 'Invalid email address' },
				{ status: 400 },
			);
		}

		// =====================================================
		// NEWSLETTER INTEGRATION OPTIONS
		// Choose ONE of the following methods:
		// =====================================================

		// OPTION 1: Formspree (Easiest - No API route needed)
		// 1. Go to https://formspree.io and create free account
		// 2. Create a form and get your form ID
		// 3. In PrivateLaunch.tsx, change the fetch URL to:
		//    `https://formspree.io/f/YOUR_FORM_ID`
		// 4. Delete this API route - not needed with Formspree

		// OPTION 2: Mailchimp (Free up to 500 contacts)
		// Uncomment and add your credentials to .env.local:
		/*
		const mailchimpResponse = await fetch(
			`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
			{
				method: 'POST',
				headers: {
					'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email_address: email,
					status: 'subscribed',
				}),
			}
		);
		*/

		// OPTION 3: ConvertKit (Free up to 1,000 subscribers)
		/*
		const convertkitResponse = await fetch(
			`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			}
		);
		*/

		// OPTION 4: Resend (Email notifications - Free 100/day)
		/*
		await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: 'Bullionaire <onboarding@resend.dev>',
				to: process.env.NOTIFICATION_EMAIL || 'you@example.com',
				subject: 'New Newsletter Subscriber',
				html: `<p>New subscriber: <strong>${email}</strong></p>`,
			}),
		});
		*/

		// OPTION 5: Store in database (Supabase, Firebase, etc.)
		// Add your database insertion code here

		// For now, just log the email (REMOVE in production)
		console.log('✅ New subscriber:', email);
		console.log(
			'📧 To actually send emails, set up one of the integration options above.',
		);
		console.log('📖 See NEWSLETTER_SETUP.md for detailed instructions.');

		// Return success
		return NextResponse.json(
			{ success: true, message: 'Successfully subscribed!' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('❌ Subscription error:', error);
		return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
	}
}
