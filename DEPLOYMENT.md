# Deployment Guide for FAABY Global Services

## Option 1: Vercel (Recommended - Easiest) ⭐

### Step 1: Prepare Your Code
1. Make sure your code is on GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Vite app
6. Click "Deploy" (no configuration needed!)

### Step 3: Add Custom Domain
1. After deployment, go to your project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `faabyservices.com`)
4. Follow the DNS configuration instructions:
   - **Add a CNAME record**: 
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `cname.vercel-dns.com`
   - Or **Add an A record**:
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21` (Vercel's IP)

5. Vercel will automatically issue an SSL certificate (free!)

### Step 4: Update Base URL (if needed)
If you're using absolute paths, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/', // or '/your-subdomain' if needed
  // ... rest of config
})
```

---

## Option 2: GitHub Pages (Free but requires more setup)

### Step 1: Install gh-pages package
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

### Step 3: Update vite.config.ts
```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // Replace with your repo name
  // ... rest of config
})
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Add Custom Domain to GitHub Pages
1. Create a `CNAME` file in `public/` folder:
   ```
   yourdomain.com
   ```
2. In your GitHub repo: Settings → Pages
3. Enter your custom domain
4. Configure DNS:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

---

## Option 3: Netlify (Also Great - Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Add custom domain in Site settings → Domain management

---

## Recommended: Vercel

✅ **Why Vercel is best:**
- Zero configuration needed
- Automatic deployments on every push
- Free SSL certificates
- Fast CDN worldwide
- Preview deployments for pull requests
- Free custom domains
- No credit card required

**Pricing:** Free tier includes:
- Unlimited projects
- 100GB bandwidth/month
- Custom domains
- SSL certificates
- Deploy previews

---

## Quick Start (Vercel)

```bash
# 1. Install Vercel CLI (optional, but recommended)
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Add custom domain
vercel domains add yourdomain.com
```

Then follow the DNS instructions shown in the terminal.

---

## DNS Configuration Tips

If you're using a domain registrar (GoDaddy, Namecheap, etc.):

### For Vercel:
- **CNAME**: `www` → `cname.vercel-dns.com`
- **A Record**: `@` → `76.76.21.21`

### For GitHub Pages:
- **CNAME**: `www` → `YOUR_USERNAME.github.io`

---

## Environment Variables

If you need environment variables:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### In code:
Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Troubleshooting

### Routes not working (404 errors)
- Vercel: Already handled by `vercel.json` rewrite rules
- GitHub Pages: Make sure `base` in `vite.config.ts` matches your repo name

### Images not loading
- Make sure all images are in `public/` folder
- Use paths starting with `/` (e.g., `/logo.png` not `./logo.png`)

### Build errors
- Run `npm run build` locally first to check for errors
- Make sure all dependencies are in `package.json`

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Deploy Guide: https://vitejs.dev/guide/static-deploy.html

