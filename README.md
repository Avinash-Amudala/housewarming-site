# 🪔 Amudala Family Housewarming Website

A beautiful, Apple-inspired website for your Gruhapravesam ceremony on **23 November 2025**.

## ✨ Features

### 🎨 Design
- **Apple-inspired aesthetics** with smooth animations and elegant transitions
- **Futuristic gradient backgrounds** with amber/gold theme
- **Floating particle effects** for visual appeal
- **Custom scrollbar** with gradient colors
- **Fully responsive** - perfect on mobile, tablet, and desktop

### 📱 Functionality
- **Hero Section** with animated entrance and divine blessings message
- **Event Schedule** with detailed timeline:
  - 🪔 Gruhapravesam: 05:25 AM
  - 🌿 Sri Satyanarayana Swamy Vratam: 10:00 AM
  - 🍛 Lunch: 12:30 PM onwards
- **Google Maps Integration** with embedded map and direct link
- **Add to Calendar** button for easy event saving
- **Photo Gallery** with lightbox effect and smooth animations
- **Family Section** with elegant photo showcase
- **Smooth scroll animations** powered by Framer Motion

## 🚀 Quick Start

### View the Website Locally

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended - FREE & Easy)

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Housewarming website ready"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. **Import to Vercel** - Click "New Project" → Import repository → Deploy
4. **Get your URL** - Vercel provides: `your-project.vercel.app`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔗 Create Short URL & QR Code

1. **Short URL**: Use [tinyurl.com](https://tinyurl.com) with alias `Amudalas`
2. **QR Code**: Use [qr-code-generator.com](https://www.qr-code-generator.com/) (High Resolution, 300x300px)

## 📂 Project Structure

```
app/
├── components/
│   ├── Hero.tsx              # Landing section
│   ├── EventDetails.tsx      # Schedule & map
│   ├── Gallery.tsx           # Photo gallery
│   ├── FamilySection.tsx     # Family photos
│   └── Footer.tsx            # Footer
├── globals.css               # Global styles
├── layout.tsx                # Root layout
└── page.tsx                  # Main page
```

## 🎨 Customization

- **Event Details**: Edit `app/components/EventDetails.tsx`
- **Photos**: Add to `public/` and update `app/components/Gallery.tsx`
- **Colors**: Search for `amber` and `orange` in component files

## 🛠️ Tech Stack

- Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Icons

## 📊 Build Status

✅ Build successful | ✅ TypeScript passed | ✅ Ready for deployment

---

**Made with ❤️ for the Amudala Family Gruhapravesam**

🪔 May Lord Venkateswara and Goddess Lakshmi bless your new home! 🪔
