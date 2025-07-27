# Netlify Deployment Guide

## Quick Deployment Steps

### 1. Go to Netlify
Visit: https://www.netlify.com/

### 2. Sign Up/Login
- Click "Sign up" or "Log in"
- Use your GitHub account for easy integration

### 3. Deploy from GitHub
1. Click "New site from Git"
2. Choose "GitHub" as your Git provider
3. Authorize Netlify to access your GitHub
4. Select your repository: `Helion39/My-Portfolio`

### 4. Build Settings
Netlify should auto-detect these settings (already configured in netlify.toml):
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### 5. Environment Variables
In Netlify dashboard, go to Site settings > Environment variables and add:
```
VITE_EMAILJS_SERVICE_ID = your_service_id
VITE_EMAILJS_TEMPLATE_ID = your_template_id  
VITE_EMAILJS_PUBLIC_KEY = your_public_key
VITE_CONTACT_EMAIL = your.email@example.com
```

### 6. Deploy
Click "Deploy site" - Netlify will:
- Clone your repository
- Install dependencies
- Build your project
- Deploy to a live URL

### 7. Custom Domain (Optional)
- Go to Site settings > Domain management
- Add your custom domain
- Netlify will handle SSL certificates automatically

## Your Site Will Be Live At:
`https://your-site-name.netlify.app`

## Automatic Updates
Every time you push to GitHub, Netlify will automatically rebuild and deploy your site!

## Troubleshooting
If build fails:
1. Check build logs in Netlify dashboard
2. Ensure all environment variables are set
3. Verify package.json scripts are correct