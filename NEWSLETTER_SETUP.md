# Newsletter Signup - Quick Start Guide

The newsletter signup is **already working** and will log emails to the console. To actually collect emails, choose one of these options:

---

## 🚀 Option 1: Formspree (Easiest - 2 Minutes)

**Best for:** Getting started immediately, no code changes

1. **Go to** [formspree.io](https://formspree.io) and create a free account

2. **Create a new form** - you'll get a URL like: `https://formspree.io/f/xbjwlqaz`

3. **Update PrivateLaunch.tsx** - Change line 20:

   ```typescript
   // Change this:
   const response = await fetch('/api/subscribe', {

   // To this:
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

4. **Done!** Emails will go to your Formspree dashboard

**Free tier:** 50 submissions/month

---

## 📧 Option 2: Mailchimp (Best for Email Marketing)

**Best for:** Professional email campaigns, automations

1. **Sign up** at [mailchimp.com](https://mailchimp.com) (free up to 500 contacts)

2. **Create an audience** and get your credentials:
   - API Key (in Account > Extras > API keys)
   - Audience ID
   - Server prefix (e.g., "us1" from API key)

3. **Create `.env.local`** in project root:

   ```bash
   MAILCHIMP_API_KEY=your_api_key_here
   MAILCHIMP_LIST_ID=your_list_id_here
   MAILCHIMP_SERVER_PREFIX=us1
   ```

4. **Uncomment the Mailchimp section** in `/app/api/subscribe/route.ts`

5. **Restart dev server:** `npm run dev`

---

## ⚡ Option 3: ConvertKit (Best for Creators)

**Best for:** Content creators, courses, digital products

1. **Sign up** at [convertkit.com](https://convertkit.com) (free up to 1,000 subscribers)

2. **Create a form** and get:
   - API Key (in Settings > Advanced)
   - Form ID

3. **Create `.env.local`**:

   ```bash
   CONVERTKIT_API_KEY=your_api_key
   CONVERTKIT_FORM_ID=your_form_id
   ```

4. **Uncomment ConvertKit section** in the API route

---

## 🔔 Option 4: Resend (Get Email Notifications)

**Best for:** Getting notified when someone subscribes

1. **Sign up** at [resend.com](https://resend.com) (free 100 emails/day)

2. **Get API key** from dashboard

3. **Create `.env.local`**:

   ```bash
   RESEND_API_KEY=re_your_api_key
   NOTIFICATION_EMAIL=your@email.com
   ```

4. **Uncomment Resend section** in the API route

---

## 🧪 Testing

1. **Run dev server:** `npm run dev`

2. **Open browser console** (F12)

3. **Submit a test email** on the homepage

4. **Check console** - you should see:
   ```
   ✅ New subscriber: test@example.com
   ```

---

## 📊 Current Setup

**Files created:**

- `/src/components/PrivateLaunch.tsx` - The signup form
- `/app/api/subscribe/route.ts` - API endpoint
- `/src/components/Button.tsx` - Updated with disabled state

**How it works now:**

- Form submits to `/api/subscribe`
- Email is validated
- Email is logged to console
- Success message shown to user

**To make it production-ready:**

1. Choose an email service above
2. Add credentials to `.env.local`
3. Uncomment that section in the API route
4. Deploy to Vercel/Netlify

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push to GitHub
2. Connect at [netlify.com](https://netlify.com)
3. Add environment variables
4. Deploy

---

## ❓ Need Help?

- **Formspree:** [help.formspree.io](https://help.formspree.io)
- **Mailchimp:** [mailchimp.com/developer](https://mailchimp.com/developer)
- **ConvertKit:** [help.convertkit.com](https://help.convertkit.com)
- **Resend:** [resend.com/docs](https://resend.com/docs)

---

## ✅ Quick Test Right Now

The form works **right now** - it just logs to console instead of sending emails.

1. Run `npm run dev`
2. Go to homepage
3. Enter email and click "Request Access"
4. Check browser console for the logged email

To actually collect emails, just add Formspree (2 minutes) or your preferred service!
