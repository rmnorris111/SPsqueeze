# Deployment Instructions for Cloudflare Pages as Subdomain

## Option 1: Direct Upload (Recommended)

Since this is a simple static landing page, the easiest approach is to build locally and upload directly:

1. Generate the build:
   ```
   npm run build
   ```

2. The static files will be in `dist/public` directory
   
3. Upload these files directly to Cloudflare Pages using the Direct Upload option

## Option 2: Git Integration

If you prefer connecting to a Git repository:

1. Push this code to a Git repository (GitHub, GitLab, etc.)

2. In Cloudflare Pages, connect to your repository

3. Use these build settings:
   - **Framework preset:** None (or React if available)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/public`
   - **Root directory:** (leave blank)
   - **Node.js version:** 20 (or latest LTS)

4. Add environment variables if needed:
   - `NODE_ENV`: `production`

## DNS Configuration for Subdomain

After deployment, you'll need to set up the subdomain:

1. In Cloudflare dashboard, go to the DNS settings for simplyprobate.co.nz
2. Add a CNAME record:
   - **Type:** CNAME
   - **Name:** Your subdomain (e.g., `quiz`)
   - **Target:** Your Cloudflare Pages domain (e.g., `your-project-name.pages.dev`)
   - **Proxy status:** Proxied (recommended)

## Custom Domain Setup in Cloudflare Pages

1. In your Cloudflare Pages project, go to "Custom domains"
2. Add custom domain: `quiz.simplyprobate.co.nz` (or your chosen subdomain)
3. Cloudflare will verify the DNS record and set up SSL certificates automatically

## Additional Notes

- The site is fully static and doesn't require any server-side functionality
- All links within the site use relative paths, so they'll work correctly on the subdomain
- External links to the main site (simplyprobate.co.nz) are properly set up with absolute URLs