# Hosting on Cloudflare Pages

## Stage 1: Prepare Your Repository
- [x] Already Complete - Your code is pushed to GitHub

## Stage 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Log in to your Cloudflare account (create one if needed)

2. **Access Pages**
   - Click "Compute (Workers)" in the left sidebar
   - Select "Workers & Pages" from the sub-menu
   - Click on "Pages" tab (NOT Workers tab)
   - Click "Create a project" or "Connect to Git"

3. **Connect GitHub Repository**
   - Choose "GitHub" as your Git provider
   - Authorize Cloudflare to access your GitHub account
   - Select your `jeansy.org` repository

## Stage 3: Configure Build Settings

**Project name:** `jeansy-blog`
**Build command:** `npm run build`
**Deploy command:** `npm run build`
**Root directory:** `/` (leave empty)

Note: Build output directory is automatically detected as `dist` by Cloudflare

## Stage 4: Deploy

1. Click "Save and Deploy"
2. Cloudflare will automatically build and deploy your site
3. You'll get a `*.pages.dev` URL (e.g., `jeansy-org.pages.dev`)

## Stage 5: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Pages dashboard, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter `jeansy.org`

2. **Update DNS**
   - Add your domain to Cloudflare DNS (if not already there)
   - Cloudflare will provide DNS instructions

## Stage 6: Auto-Deploy Setup

- [x] Already Configured - Every push to `main` branch will auto-deploy

---

**Total time:** ~10 minutes  
**Cost:** Free tier covers most personal sites  
**Features:** Automatic HTTPS, global CDN, auto-deployments

## Build Configuration Summary

For reference, here are the exact build settings to use:

```
Project name: jeansy-blog
Build command: npm run build
Deploy command: npm run build
Root directory: / (leave empty)
Node.js version: 18.x (or latest)
Build output directory: dist (auto-detected)
```

## Environment Variables

No environment variables are required for the basic setup.

## References

- [Official Cloudflare Pages Astro Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

## Troubleshooting

- If build fails, check that `package.json` has correct scripts
- Ensure `dist/` directory is in `.gitignore` (already configured)
- Build logs are available in Cloudflare Pages dashboard
- For static sites, leave deploy command empty - Cloudflare auto-serves from `dist`