# Google reCAPTCHA Setup Guide

## Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Fill in the form:
   - **Label**: Your portfolio website name (e.g., "Nabil Portfolio")
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domains:
     - `nabilhanif.netlify.app`
     - `localhost` (for development)
     - Any other domains you use
4. Accept the terms and click "Submit"
5. Copy your **Site Key** and **Secret Key**

## Step 2: Configure Environment Variables

1. Open your `.env.local` file (create it if it doesn't exist)
2. Add your reCAPTCHA site key:

```env
# Google reCAPTCHA Configuration
VITE_RECAPTCHA_SITE_KEY=your_actual_site_key_here

# Your existing EmailJS configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your.email@gmail.com
```

## Step 3: EmailJS Template Setup

Make sure your EmailJS template includes these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Mohammad Nabil Hanif)
- `{{subject}}` - Email subject

## Step 4: Test the Form

1. Save your changes and restart your development server
2. Go to your contact form
3. Fill out the form and complete the CAPTCHA
4. Submit the form
5. Check your Gmail inbox for the message

## Security Notes

- The **Site Key** is public and safe to include in your frontend code
- The **Secret Key** should NEVER be exposed in frontend code
- reCAPTCHA v2 provides good protection against bots while being user-friendly
- The form is disabled until CAPTCHA is completed

## Troubleshooting

### CAPTCHA not showing:
- Check that your site key is correct
- Verify your domain is added to the reCAPTCHA configuration
- Check browser console for errors

### Form not submitting:
- Ensure CAPTCHA is completed
- Check EmailJS configuration
- Verify all environment variables are set

### Emails not arriving:
- Check spam folder
- Verify EmailJS template configuration
- Test EmailJS service independently

## Production Deployment

When deploying to Netlify:
1. Go to your Netlify site settings
2. Navigate to "Environment variables"
3. Add your `VITE_RECAPTCHA_SITE_KEY` variable
4. Redeploy your site

Your contact form is now protected with reCAPTCHA and ready to send emails to your Gmail!