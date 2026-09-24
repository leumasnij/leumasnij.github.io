# Shengmiao Jin Academic Website

Astro site deployed as static files to GitHub Pages (`master` branch root).

## Local development

```sh
npm install
npm run dev
```

## Publish to GitHub Pages

After editing content under `src/` or `public/`, rebuild and copy the output to the repo root, then commit:

```sh
npm run build
npm run publish:static
git add -A
git commit -m "Update site"
git push
```

`publish:static` copies `dist/` into the repo root (`index.html`, `_astro/`, `images/`, etc.) so GitHub Pages can serve the site without Jekyll.

## Content

- `src/data/site.ts` — profile, navigation, socials
- `src/data/publications.ts` — publications
- `src/data/teaching.ts` — teaching
- `src/pages/` — page content
- `public/` — source assets (copied into the build)
