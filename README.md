# LeadShield AI

Never miss another customer call. AI automatically captures leads when you're busy.

## What This Does

LeadShield AI monitors missed calls to your business phone and instantly sends SMS notifications to customers instead of sending them to voicemail. This keeps leads warm while you're on jobs, ensuring no revenue falls through the cracks.

### Key Features
- Automatic missed call detection
- Instant SMS notifications to customers
- Call-to-lead conversion tracking
- AI-powered customer qualification
- Simple integration with existing phone lines

## How to Deploy This on GitHub Pages (FREE)

### Step 1: Initialize Git (if not already done)
```bash
cd bluegrass-ai
git init
git add .
git commit -m "Initial commit - LeadShield AI website"
```

### Step 2: Create GitHub Repository
1. Go to GitHub.com and create a new public repository called `bluegrass-ai`
2. Copy the remote URL (should look like: `https://github.com/yourusername/bluegrass-ai.git`)

### Step 3: Push to GitHub with GitHub Desktop
1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select the `bluegrass-ai` folder
4. Click "Publish repository" (make sure it's set to public)

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Go to **Settings** → **Pages**
3. Set "Deploy from branch" to `main` branch, `/root` folder
4. Click Save
5. Your site will be live at: `https://yourusername.github.io/bluegrass-ai/`

## Customization

### Change Business Name
Search for "LeadShield AI" in `index.html` and replace with your business name.

### Update Contact Info
- Email: Look for `hello@leadshieldai.com` in `index.html`
- Phone: Look for `(555) 000-0000` in `index.html`

### Update Pricing
Edit the pricing section in `index.html` with your actual prices.

### Colors
Edit the `:root` section in `style.css` to change the color scheme:
- `--primary-color`: Main blue color
- `--secondary-color`: Green color for success/savings

## Next Steps for Full Functionality

This is your MVP landing page. To add full AI functionality:

1. **Twilio Integration** - Connect customer phone lines
2. **SMS Automation** - Auto-text when calls are missed
3. **Lead Database** - Store and track captured leads
4. **Payment Processing** - Stripe integration for monthly subscriptions

## Free Resources to Scale

- **Hosting**: GitHub Pages (free forever)
- **SMS API**: Twilio (free trial + pay-as-you-go)
- **Email**: Mailchimp (free for up to 500 contacts)
- **Forms**: Formspree (free form submissions)

## Questions?

This landing page is designed to start conversations with local business owners. Use it to:
1. Demonstrate the concept
2. Qualify leads with the 3 questions
3. Book demos and collect early customers
4. Test your messaging before building the full platform

Good luck! 🚀

---

**Note**: Replace placeholder emails and phone numbers with your actual contact details. Test on mobile - most small business owners will view this on their phones.
