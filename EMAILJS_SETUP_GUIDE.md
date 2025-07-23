# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service (Gmail)
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Connect your Gmail account (mohammad.n.hanif@gmail.com)
5. Note down the **Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact from {{from_name}} - Portfolio

**Content:**
```
Hello Mohammad,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Set the template settings:
   - **To Email:** mohammad.n.hanif@gmail.com
   - **From Name:** {{from_name}}
   - **Reply To:** {{from_email}}
5. Save the template and note down the **Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (something like `your_public_key_here`)

## Step 5: Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the test message

## Template Variables Used
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{to_name}}` - Your name (Mohammad Nabil Hanif)
- `{{to_email}}` - Your email (mohammad.n.hanif@gmail.com)
- `{{message}}` - The message content
- `{{subject}}` - Auto-generated subject line
- `{{reply_to}}` - Set to visitor's email for easy replies

## Security Notes
- Never commit your `.env.local` file to version control
- The `.env.local` file is already in your `.gitignore`
- EmailJS free plan allows 200 emails per month
- Consider upgrading if you expect more contact form submissions

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all credentials are correct in `.env.local`
- Make sure your Gmail account is properly connected in EmailJS
- Check your Gmail spam folder for test emails