# Hugo Documentation Template for Cloudflare Workers

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/taslabs-net/cloudflarepages-hugo)

A zero-config Hugo documentation site that deploys to Cloudflare Workers. Just edit markdown files on GitHub - no installation required!

Visit the example: https://timsnotes.pages.dev/

## Features

- **Zero Setup** - Click deploy, start writing
- **GitHub Editing** - Edit markdown files directly on GitHub
- **Auto Deploy** - Every commit automatically deploys
- **Global CDN** - Served from 300+ Cloudflare locations
- **Fast** - Built with Hugo, one of the fastest static site generators
- **Beautiful** - Clean documentation theme with search and dark mode

## Quick Start (30 seconds)

1. Click the "Deploy to Cloudflare Workers" button above
2. Authorize GitHub and Cloudflare
3. Done! Your site is live

## How to Use

### Edit Content
1. Go to your forked repository on GitHub
2. Navigate to any `.md` file in the `content/` folder
3. Click the pencil icon to edit
4. Make changes and commit
5. Your site updates automatically!

### Add New Pages
1. Go to `content/docs/` in your repository
2. Click "Create new file"
3. Name it `my-page.md`
4. Add frontmatter and content:
```markdown
---
title: "My Page"
weight: 10
---

Your content here...
```

### Organize Content
```
content/
├── _index.md          # Homepage
└── docs/              # All documentation
    ├── section1/      # Create folders for sections
    │   ├── _index.md  # Section overview
    │   └── page1.md   # Pages in section
    └── page.md        # Standalone pages
```

## Customization

### Change Site Title
Edit `hugo.toml`:
```toml
title = 'Your Site Name'
```

### Reorder Menu Items
Add `weight` to frontmatter:
```yaml
---
title: "My Page"
weight: 1  # Lower numbers appear first
---
```

### Theme Settings
The `hugo.toml` file contains theme options:
- `BookTheme` - Set to 'light', 'dark', or 'auto'
- `BookSearch` - Enable/disable search
- `BookToC` - Show/hide table of contents

## Advanced Usage

### Custom Domain
1. Add your domain to Cloudflare
2. Update `wrangler.toml` with your domain
3. Commit the change

### Local Development
Only needed if you want to preview locally:
```bash
git clone <your-fork>
cd <your-fork>
npm install
npm run dev
```

### Manual Deployment
```bash
npm run deploy
```

## Project Structure

```
.
├── content/          # Your markdown content
├── themes/book/      # Hugo Book theme
├── hugo.toml         # Hugo configuration
├── wrangler.toml     # Cloudflare Workers config
├── package.json      # Build scripts
└── src/index.js      # Workers entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Book Theme Docs](https://github.com/alex-shpak/hugo-book)

## Troubleshooting

**Site not updating?**
- Check GitHub Actions tab for build errors
- Ensure frontmatter is valid YAML

**Page not showing?**
- Check if `draft: true` is set
- Verify file is in `content/` directory
- Ensure `.md` extension

**Need help?**
- Open an issue on GitHub
- Check Hugo and Cloudflare docs

## License

This template is open source under the MIT License.