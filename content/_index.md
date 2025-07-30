---
title: "Template Homepage"
description: "Hugo documentation site template for Cloudflare Workers"
---

# Hugo Documentation Template

A simple Hugo-based documentation site that automatically deploys to Cloudflare Workers. Just edit markdown files on GitHub and your changes go live automatically!

## Quick Start (30 seconds!)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/taslabs-net/cloudflarepages-hugo)

1. Click the button above
2. Authorize with GitHub and Cloudflare
3. Done! Your site is live

## How It Works

1. **Edit on GitHub** - Simply edit markdown files directly on GitHub
2. **Automatic Deployment** - Every commit triggers an automatic build and deploy
3. **Global CDN** - Your site is served from Cloudflare's edge network worldwide

## No Installation Required!

This template is designed to work without any local setup:

- Edit markdown files directly on GitHub
- Preview changes using GitHub's markdown preview
- Commit changes and they're live in seconds
- No command line needed
- No software to install

## Creating Content

### Add a New Page

1. Navigate to `content/docs/` in your GitHub repository
2. Click "Create new file"
3. Name it `my-page.md` or create a folder like `my-topic/_index.md`
4. Add this frontmatter:

```yaml
---
title: "My New Page"
description: "What this page is about"
weight: 10
---

# My Content

Start writing here...
```

5. Commit the file - your page is now live!

### Edit Existing Pages

1. Browse to any `.md` file in your repository
2. Click the pencil icon to edit
3. Make your changes
4. Commit - changes deploy automatically

## Site Structure

```
content/
├── _index.md          # Homepage (you are here!)
└── docs/              # Documentation section
    ├── topic1/        # Getting Started
    ├── topic2/        # Content Creation  
    └── topic3/        # Customization
```

## Features

- **Pure Markdown** - Write content in simple markdown
- **Auto Deploy** - Push to GitHub, deploy to Cloudflare
- **Global CDN** - Fast loading worldwide
- **Built-in Search** - Find content quickly
- **Mobile Friendly** - Responsive design
- **Dark Mode** - Auto-switches based on preference

## Customization

### Change Site Title

Edit `hugo.toml` on GitHub:
```toml
title = 'Your Site Name'
```

### Modify Navigation

The sidebar automatically reflects your folder structure. To reorder:
- Add `weight: 1` to frontmatter (lower numbers appear first)
- Rename folders to change URLs

