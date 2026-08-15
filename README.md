# SAWELY Landing Page

Arabic-first static landing page for [me.sawely.com](https://me.sawely.com), built with Next.js, TypeScript, and CSS. It links to the [live demo](https://demo.sawely.com/) and [WhatsApp](https://wa.me/96567795155).

## Local development

```bash
npm install
npm run dev
```

Create a production static export in `out/`:

```bash
npm run build
```

## Logo

Add the final logo at `public/brand/sawely-logo.png`. Until then, the site displays a styled text fallback.

## GitHub Pages

Pushes to `main` automatically build and deploy through `.github/workflows/deploy-pages.yml`. In the repository settings, set Pages source to **GitHub Actions** and configure the custom domain as `me.sawely.com`.

If it is not already configured, add only this DNS record:

```text
Type: CNAME
Name: me
Target: usama7amza.github.io
```

This subdomain record does not change the existing root website. `public/CNAME` is included in every static export.
