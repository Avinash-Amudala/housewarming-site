# 🚀 Complete Vercel Deployment Guide with PostgreSQL

## ✅ Step 1: Code Ready for Deployment
Your code is configured for PostgreSQL and ready at: https://github.com/Avinash-Amudala/housewarming-site

**✨ What's been prepared:**
- ✅ Prisma schema updated to use PostgreSQL
- ✅ All components ready for production
- ✅ Photo upload feature fully configured
- ✅ Bilingual support (Telugu/English)

---

## 🚀 Step 2: Deploy to Vercel (5 Minutes)

### **No credentials needed from you!** Vercel uses secure GitHub OAuth.

### Instructions:

1. **Go to Vercel**: https://vercel.com

2. **Sign Up/Login**:
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub account (Avinash-Amudala)
   - This is secure OAuth - no passwords shared

3. **Import Your Repository**:
   - Click "Add New..." → "Project"
   - Find and select: `Avinash-Amudala/housewarming-site`
   - Click "Import"

4. **Configure Project** (Auto-detected, just verify):
   - Framework Preset: **Next.js** ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅

5. **Click "Deploy"**
   - Wait 2-3 minutes for initial deployment
   - You'll get a URL like: `https://housewarming-site-xxx.vercel.app`

---

## 💾 Step 3: Add PostgreSQL Database (Required for Photo Uploads)

**After your first deployment:**

1. **In Vercel Dashboard**, go to your project

2. **Click "Storage" tab** (top menu)

3. **Create Database**:
   - Click "Create Database"
   - Select "Postgres"
   - Choose a region (closest to India: Singapore or Mumbai if available)
   - Click "Create"

4. **Connect to Project**:
   - Vercel will ask which project to connect
   - Select your `housewarming-site` project
   - Click "Connect"

5. **Environment Variable Added**:
   - Vercel automatically adds `DATABASE_URL` to your project
   - No manual configuration needed! ✨

---

## 🔄 Step 4: Run Database Migration

**Two ways to do this:**

### Option A: Via Vercel Dashboard (Easiest)

1. Go to your project in Vercel
2. Click "Settings" → "Functions"
3. Add a new Serverless Function or use the terminal in Vercel
4. Run: `npx prisma migrate deploy`

### Option B: Via Local Terminal (Recommended)

```bash
# Make sure you're in the project directory
cd housewarming-site

# Set the DATABASE_URL from Vercel
# (Copy from Vercel Dashboard → Settings → Environment Variables → DATABASE_URL)
# Then run:
npx prisma migrate deploy
```

**Or create a one-time migration script:**

I can create a migration endpoint that you can visit once to set up the database.

---

## 🎉 Step 5: Your Website is Live!

After deployment, your website will be available at:
- **Vercel URL**: `https://housewarming-site-xxx.vercel.app`
- You can customize this in Vercel settings

### ✅ What Works:
- ✨ Beautiful animated homepage
- 📅 Event details in Telugu & English
- 🗺️ Google Maps integration
- 📸 Photo gallery with family photos
- 🌐 Language toggle (Telugu ↔ English)
- 📤 **Photo/Video upload feature** (after database setup)
- 📱 Fully responsive design

---

## 🔧 Optional: Custom Domain

Want a custom URL like `amudala-gruhapravesam.com`?

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Vercel Dashboard → Settings → Domains
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

---

## 📱 Generate QR Code for Invitations

Once deployed, generate a QR code:

1. **Use your Vercel URL**: `https://housewarming-site-xxx.vercel.app`
2. **Generate QR Code**:
   - Go to: https://www.qr-code-generator.com/
   - Paste your URL
   - Download high-resolution QR code
   - Add to your invitation cards!

---

## 🆘 Troubleshooting

### Photo uploads not working?
- Make sure you completed Step 3 (PostgreSQL setup)
- Check that `DATABASE_URL` is in Environment Variables
- Run the database migration (Step 4)

### Website not loading?
- Check build logs in Vercel Dashboard
- Make sure all dependencies are installed
- Verify Next.js version compatibility

### Need to update the site?
```bash
git add .
git commit -m "Update website"
git push origin master
```
Vercel will automatically redeploy! 🚀

---

## 📞 Support

If you encounter any issues:
1. Check Vercel build logs
2. Check browser console for errors
3. Let me know and I'll help debug!

---

**Ready to deploy? Just follow Steps 2-4 above!** 🎊

