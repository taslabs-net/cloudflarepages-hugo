---
title: "Configuration"
description: "Basic configuration options"
weight: 2
---

# Configuration

Learn how to configure your Hugo documentation site.

## Hugo Configuration

The main configuration file is `hugo.toml` in the root directory.

### Basic Settings

```toml
baseURL = '/'
languageCode = 'en-us'
title = 'Your Site Title'
theme = 'book'
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `baseURL` | The base URL of your site | `/` |
| `languageCode` | Language code for the site | `en-us` |
| `title` | Site title shown in browser | Required |
| `theme` | Hugo theme to use | `book` |

## Theme Configuration

The Book theme supports additional parameters:

```toml
[params]
  # Show/hide table of contents
  BookToC = true
  
  # Set source repository for edit links
  BookRepo = 'https://github.com/yourusername/your-forked-repo'
  
  # Enable search
  BookSearch = true
```

## Content Organization

### Directory Structure

```
content/
├── _index.md        # Homepage
└── docs/            # Documentation section
    ├── _index.md    # Docs landing page
    └── topic/       # Topic directory
        └── _index.md # Topic page
```

### Frontmatter

Each content file should include frontmatter:

```yaml
---
title: "Page Title"
description: "Page description"
weight: 1  # Order in navigation
draft: false  # Set to true to hide
---
```

## Next Steps

- [Create your first content](/docs/topic2)
- [Customize the appearance](/docs/topic3)
- [Deploy updates](../)
