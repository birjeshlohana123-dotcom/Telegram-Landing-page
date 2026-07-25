# PREMIUM FOLDERS HUB - Telegram Landing Page

A premium, modern, high-converting landing page for **PREMIUM FOLDERS HUB** Telegram community.

## Brand Info

- **Brand Name:** PREMIUM FOLDERS HUB
- **Telegram Link:** https://t.me/Love_O_P
- **Telegram Username:** @Love_O_P

## Features

- Premium dark theme with glassmorphism effects
- Gold/amber accent colors matching your brand logo
- Fully responsive mobile-first design
- Smooth scroll animations and hover effects
- Animated counters and floating elements
- FAQ accordion section
- Testimonials with star ratings
- Community stats with animated counters
- Floating Telegram button
- Sticky mobile CTA
- Copy-to-clipboard functionality
- Scroll progress bar
- Back-to-top button
- SEO optimized with meta tags
- Accessibility friendly

## Quick Start

### 1. Your Telegram Link is Already Configured

The link `https://t.me/Love_O_P` is already set in `script.js`. All CTA buttons across the page will redirect to your Telegram.

### 2. Deploy to Go Live

#### Option A: Netlify (Easiest - 2 minutes)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop the `telegram-landing-page` folder
3. Your site is live instantly!

#### Option B: Vercel
1. Go to [vercel.com](https://vercel.com/)
2. Sign in with GitHub
3. Import your repository or drag & drop the folder
4. Deploy!

#### Option C: GitHub Pages
1. Push the `telegram-landing-page` folder to a GitHub repository
2. Go to repository **Settings** → **Pages**
3. Select source branch (usually `main` or `master`)
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### 3. Connect Your Domain (Optional)

Update these meta tags in `index.html` with your actual domain:

```html
<link rel="canonical" href="https://yourdomain.com/">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg">
```

## File Structure

```
telegram-landing-page/
├── index.html          # Main landing page (all links set to t.me/Love_O_P)
├── style.css           # Custom styles & animations
├── script.js           # All JavaScript functionality
├── assets/
│   ├── logo.jpg        # Your PREMIUM FOLDERS HUB logo
│   └── favicon.svg     # Telegram-themed favicon
└── README.md           # This file
```

## Customization Guide

### Change Text Content

All text is in `index.html`. Simply edit the text between HTML tags:
- Headlines
- Subheadings
- Feature descriptions
- Testimonials
- FAQ questions and answers

### Change Colors

Colors are defined in the Tailwind config within `index.html`:

```javascript
colors: {
    telegram: {
        500: '#2AABEE',  // Main Telegram blue (keep this for CTAs)
        // ...
    },
    dark: {
        900: '#0B0F1A',  // Background color
        // ...
    }
}
```

### Change Stats Numbers

Find the counter elements in `index.html`:

```html
<span class="counter" data-target="10000">0</span>+
```

Change `data-target` to your actual numbers.

### Add Meta Pixel for Facebook Ads Tracking

Paste your Meta Pixel code in the `<head>` section of `index.html`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```

## Meta Ads Best Practices

1. **Landing Page URL:** Use your deployed URL in Meta Ads
2. **UTM Tracking:** Add UTM parameters for better tracking:
   ```
   https://yourdomain.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=folders_hub
   ```
3. **Conversion Event:** Set up a "Join Telegram" custom conversion in Meta Events Manager
4. **A/B Testing:** Test different headlines and CTAs

## Performance

- Uses Tailwind CSS via CDN for fast setup
- Optimized for Core Web Vitals
- Mobile-first responsive design
- Lazy loading ready
- Lighthouse score target: 95+

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This template is free to use for personal and commercial projects.

---

**PREMIUM FOLDERS HUB** | [t.me/Love_O_P](https://t.me/Love_O_P)
