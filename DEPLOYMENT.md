# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: GitHub → Vercel (Automatic)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/jonbingham121/los-tapatios-restaurant.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your `los-tapatios-restaurant` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `lostapatios.restaurant`
   - Follow DNS configuration instructions
   - Vercel will provide nameservers or CNAME records

### Option 2: Direct Deploy with Vercel CLI

```bash
npm install -g vercel
cd /root/.openclaw/workspace/los-tapatios-restaurant
vercel --prod
```

Follow the prompts to link your Vercel account.

## Domain Setup

### lostapatios.restaurant

**Registrar:** (Your domain registrar - GoDaddy, Namecheap, etc.)

**DNS Configuration:**

After deploying to Vercel, you'll get DNS instructions. Typically:

**Option A: Nameservers** (Recommended)
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: CNAME Record**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Environment Variables

This site has no environment variables required for production.

Future additions (online ordering integration, analytics, etc.) can be added in Vercel dashboard:
- Project Settings → Environment Variables

## Build Settings

Vercel auto-detects these, but for reference:

- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

## Post-Deployment Checklist

After your first deployment:

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags (view source)
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test contact form (if backend is added)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Add real content (addresses, phone numbers, photos)

## Updates

After pushing changes to GitHub, Vercel will automatically rebuild and deploy.

```bash
git add .
git commit -m "Update menu prices"
git push
```

## Manual Deployment Trigger

If you need to redeploy without code changes:
- Go to Vercel dashboard
- Select your project
- Click "Deployments"
- Click "..." → "Redeploy"

## Preview Deployments

Every branch push gets a preview URL:
- `feature-branch.lostapatios.restaurant`

Perfect for testing changes before merging to main.

## Rollback

If a deployment has issues:
- Go to Vercel dashboard → Deployments
- Find a previous working deployment
- Click "..." → "Promote to Production"

---

**Need help?** Vercel docs: https://vercel.com/docs
