# 🎉 Amudala Family Housewarming Website - Deployment Guide

## 🌟 Website Features

Your beautiful, Apple-inspired housewarming website includes:

- ✨ **Stunning Hero Section** with animated gradients and floating particles
- 📅 **Event Schedule** with interactive timeline
- 🗺️ **Google Maps Integration** with embedded map
- 📸 **Photo Gallery** with lightbox effect
- 👨‍👩‍👧‍👦 **Family Section** with elegant photo showcase
- 📱 **Fully Responsive** - works perfectly on all devices
- 🎭 **Smooth Animations** inspired by Apple's design language
- 📆 **Add to Calendar** functionality
- 🎨 **Custom Scrollbar** with gradient colors

## 🚀 Quick Deployment to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Your Code to GitHub**
   ```bash
   # In the housewarming-site directory
   git init
   git add .
   git commit -m "Initial commit - Housewarming website"
   
   # Create a new repository on GitHub, then:
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "Add New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

4. **Get Your URL**
   - Vercel will give you a URL like: `your-project.vercel.app`
   - You can add a custom domain later if you want

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from housewarming-site directory)
vercel

# For production deployment
vercel --prod
```

## 🔗 Creating Short URL for QR Code

Once deployed, create a short URL:

1. **Using TinyURL**
   - Go to [tinyurl.com](https://tinyurl.com)
   - Paste your Vercel URL
   - Custom alias: `Amudalas`
   - Final URL: `https://tinyurl.com/Amudalas`

2. **Using Bitly** (Alternative)
   - Go to [bitly.com](https://bitly.com)
   - Create custom short link
   - More analytics available

## 📱 Generate QR Code

After getting your short URL:

1. **Using QR Code Generator**
   - Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
   - Enter your short URL: `https://tinyurl.com/Amudalas`
   - Choose "High Resolution" for printing
   - Download as PNG or SVG
   - Recommended size: 300x300 pixels minimum for cards

2. **Using QR Code Monkey** (More customization)
   - Go to [qrcode-monkey.com](https://www.qrcode-monkey.com/)
   - Add your URL
   - Customize colors (suggest: gold/amber to match website)
   - Download high-res version

## 🛠️ Local Development

To run the website locally:

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 📝 Updating Content

### To Update Event Details
Edit `app/components/EventDetails.tsx`

### To Update Photos
1. Add new photos to the `public` folder
2. Update the image paths in `app/components/Gallery.tsx`

### To Update Family Section
Edit `app/components/FamilySection.tsx`

## 🎨 Customization Tips

- **Colors**: The website uses amber/orange gradient theme. To change, search for `amber` and `orange` in the component files
- **Fonts**: Currently using Inter font. Can be changed in `app/layout.tsx`
- **Animations**: Powered by Framer Motion. Adjust timing in component files

## 📊 After Deployment

1. **Test on Multiple Devices**
   - Mobile phones (iOS & Android)
   - Tablets
   - Desktop browsers

2. **Share the Link**
   - Test the QR code before printing
   - Share the short URL with family

3. **Monitor Traffic** (Optional)
   - Vercel provides basic analytics
   - Can add Google Analytics if needed

## 🆘 Troubleshooting

**Build Errors?**
- Make sure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next` then rebuild

**Images Not Loading?**
- Verify images are in the `public` folder
- Check file names match exactly in the code

**Deployment Failed?**
- Check Vercel deployment logs
- Ensure all environment variables are set (if any)

## 🎁 Next Steps

After the ceremony, you can:
1. Upload event photos to the gallery
2. Add video links
3. Keep the site as a memory
4. Share with guests who couldn't attend

---

**Need Help?** Contact Vercel support or check [Next.js documentation](https://nextjs.org/docs)

**Enjoy your special day! 🎉🪔**

