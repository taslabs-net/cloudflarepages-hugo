---
title: "Getting Started"
description: "Deploy your documentation site in minutes"
weight: 1
---

# Getting Started

Deploy your documentation site to Cloudflare Workers in just a few clicks - no installation required!

## One-Click Deploy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/taslabs-net/cloudflarepages-hugo)

Click the button above and follow these steps:

1. **Authorize GitHub** - Allow Cloudflare to fork the repository
2. **Authorize Cloudflare** - Connect your Cloudflare account
3. **Deploy** - Your site will be live in seconds!

## Your Site is Ready!

Once deployed, you'll get:
- A live URL like `https://your-project.workers.dev`
- Automatic deployments when you edit files on GitHub
- Global CDN distribution

## Making Your First Edit

### Option 1: Edit on GitHub (Recommended)

1. Go to your forked repository on GitHub
2. Navigate to `content/_index.md`
3. Click the pencil icon to edit
4. Change the title or add content
5. Click "Commit changes"
6. Your site updates automatically!

### Option 2: Upload Files

1. Navigate to `content/docs/` in your repository
2. Click "Add file" → "Upload files"
3. Drag and drop markdown files
4. Commit the changes

## Understanding the Structure

```
content/
├── _index.md          # Homepage
└── docs/              # Documentation pages
    ├── _index.md      # Docs overview
    ├── topic1/        # This section (Getting Started)
    │   ├── _index.md  # Section overview
    │   ├── subtopic1/ # Sub-sections
    │   └── subtopic2/
    └── topic2/        # Another section
```

## Creating New Pages

### Add a Simple Page

1. Go to `content/docs/` on GitHub
2. Click "Create new file"
3. Name it `my-page.md`
4. Add content:

```markdown
---
title: "My New Page"
weight: 10
---

# My New Page

Your content here...
```

### Add a Section with Sub-pages

1. Create a folder: `content/docs/my-section/_index.md`
2. Add sub-pages: `content/docs/my-section/page1.md`

## Tips

- **Preview Markdown** - Use GitHub's Preview tab before committing
- **Order Pages** - Use `weight` in frontmatter (lower = higher in menu)
- **Hide Drafts** - Add `draft: true` to frontmatter
- **Add Descriptions** - Include `description` for better SEO

## Next Steps

- [Configure Your Site](../subtopic2) - Customize title, theme, and settings
- [Create Content](/docs/topic2) - Learn markdown and Hugo features
- [Advanced Setup](./anotherpage) - For local development