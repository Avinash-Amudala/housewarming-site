# 🔧 Fix for Vercel Build Error

## ❌ Error You Got:
```
Missing required environment variable: DATABASE_URL
```

## ✅ Solution: Add DATABASE_URL Before Building

### **Step 1: Go to Your Vercel Project**
1. Go to: https://vercel.com/dashboard
2. Click on your `housewarming-site` project

### **Step 2: Add Environment Variable**
1. Click "Settings" (top menu)
2. Click "Environment Variables" (left sidebar)
3. Add a new variable:
   - **Key**: `DATABASE_URL`
   - **Value**: `postgresql://dummy:dummy@localhost:5432/dummy`
   - **Environment**: Select all (Production, Preview, Development)
4. Click "Save"

### **Step 3: Redeploy**
1. Go to "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"
4. Wait for build to complete

### **Step 4: Create Real Database (After Successful Build)**
1. Go to "Storage" tab
2. Click "Create Database" → "Postgres"
3. Select region (Singapore recommended)
4. Click "Create"
5. Connect to your project
6. This will automatically update the `DATABASE_URL` with the real value

### **Step 5: Redeploy Again (Final)**
1. Go to "Deployments" tab
2. Click "Redeploy" one more time
3. This time it will use the real database

### **Step 6: Setup Database Tables**
Visit this URL once:
```
https://your-site.vercel.app/api/migrate
```

---

## 🎉 Done!

Your website should now be fully functional with database support!

---

## 📝 Summary

The issue was that Prisma needs `DATABASE_URL` during the build process, but you hadn't created the database yet. By adding a dummy value first, the build succeeds, then you can add the real database and redeploy.

---

## 🆘 Still Having Issues?

Let me know and I'll help you debug!

