---
title: "Advanced Installation Options"
description: "Additional installation methods and configurations"
weight: 2
---

# Advanced Installation Options

This page covers advanced installation scenarios and alternative deployment methods.

## Local Development

To run the site locally for development:

### Prerequisites
- Hugo Extended installed locally (version 0.148.2+)
- Git

### Steps

1. Clone your forked repository:
```bash
git clone https://github.com/yourusername/your-forked-repo.git
cd your-forked-repo
```

2. Start the development server:
```bash
hugo server -D
```

4. View your site at `http://localhost:1313`

## Alternative Deployment Platforms

### GitHub Pages

1. Add a GitHub Actions workflow:
```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.148.2'
      - name: Build
        run: hugo --minify
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Use these build settings:
   - Build command: `hugo`
   - Publish directory: `public`
   - Add environment variable: `HUGO_VERSION = 0.148.2`

## Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM klakegg/hugo:0.148.2-ext-alpine AS builder
WORKDIR /src
COPY . .
RUN hugo --minify

FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
```

Build and run:
```bash
docker build -t my-hugo-site .
docker run -p 8080:80 my-hugo-site
```

## Troubleshooting

### Common Issues

**Theme not found**
- Ensure the theme is properly installed in `themes/book`
- Verify the theme folder exists and contains theme files

**Build fails on Cloudflare**
- Verify HUGO_VERSION environment variable
- Check for case-sensitive file paths

**Content not appearing**
- Ensure files have proper frontmatter
- Check for `draft: true` in frontmatter
- Verify file is in correct directory

## Next Steps

- Return to [Installation Guide](./)
- Continue to [Configuration](../subtopic2)
- Learn about [Content Creation](/docs/topic2)
