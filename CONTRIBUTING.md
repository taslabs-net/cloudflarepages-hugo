# Contributing to Hugo Documentation Template

Thank you for your interest in contributing to the Hugo Documentation Template
for Cloudflare Workers! This guide will help you get started with contributing
to our project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Making Changes](#making-changes)
- [Testing Your Changes](#testing-your-changes)
- [Submitting Changes](#submitting-changes)
- [Release Process](#release-process)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Getting Help](#getting-help)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22 LTS or higher (we use `.nvmrc` to specify the version)
- **npm**: Version 10.0.0 or higher
- **Hugo**: Version 0.128.0 or higher (extended edition recommended)
- **Git**: For version control
- A **GitHub** account for contributing

### Using the Correct Node Version

We use Node.js 22 LTS. If you have `nvm` installed:

```bash
nvm use  # This will read .nvmrc and switch to the correct version
```

If you don't have the required version:

```bash
nvm install  # Install the version specified in .nvmrc
```

## Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/cloudflarepages-hugo.git
   cd cloudflarepages-hugo
   ```

3. **Add the upstream repository**:

   ```bash
   git remote add upstream https://github.com/taslabs-net/cloudflarepages-hugo.git
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Set up Git hooks** (automatically done via Husky):
   - Pre-commit: Runs Prettier on staged files
   - Commit-msg: Validates commit message format

## Development Workflow

### Branch Naming Conventions

Create feature branches with descriptive names:

- `feat/add-new-feature` - For new features
- `fix/bug-description` - For bug fixes
- `docs/update-documentation` - For documentation changes
- `chore/update-dependencies` - For maintenance tasks

Or use the pattern: `username/ticket-number-description` (e.g.,
`tim/sch-9-contributingmd`)

### Making Commits

We use **Conventional Commits** for consistent commit messages.

#### Using Commitizen (Recommended)

```bash
npm run commit
```

This will launch an interactive prompt to help you create a properly formatted
commit message.

#### Manual Commit Format

If you prefer to write commits manually, follow this format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `build`: Build system changes
- `ci`: CI/CD changes

**Examples:**

```bash
git commit -m "feat: add dark mode toggle to navigation"
git commit -m "fix: resolve markdown rendering issue in docs"
git commit -m "docs: update installation instructions"
```

### Pre-commit Hooks

Our pre-commit hooks will automatically:

1. **Format your code** using Prettier
2. **Validate commit messages** using Commitlint

If your commit is rejected, check the error message and ensure your commit
follows the conventional format.

## Code Standards

### Code Formatting

We use **Prettier** for consistent code formatting. Configuration is in
`.prettierrc`.

- **Check formatting**: `npm run lint`
- **Auto-fix formatting**: `npm run format` or `npm run lint:fix`

### Editor Configuration

We include an `.editorconfig` file to ensure consistent coding styles. Most
modern editors support this automatically.

Key settings:

- Indent: 2 spaces
- End of line: LF
- Charset: UTF-8
- Trim trailing whitespace
- Insert final newline

### File Organization

- Place all documentation content in `content/`
- Static assets go in `static/`
- Hugo configuration lives in `config/` (environment-specific)
- Theme files are in `themes/book/` (avoid modifying directly)

## Making Changes

### Content Changes

1. **Documentation pages**: Edit or add `.md` files in `content/docs/`
2. **Homepage**: Edit `content/_index.md`
3. **Blog posts**: Add to `content/posts/` (if enabled)

#### Frontmatter Example

```yaml
---
title: 'Page Title'
weight: 10 # For ordering in menu
draft: false
---
```

### Configuration Changes

- **Main config**: `hugo.toml` (legacy, being phased out)
- **Modular configs**: `config/_default/`, `config/production/`,
  `config/development/`
- **Build settings**: `wrangler.toml` for Cloudflare Workers

### Adding Dependencies

When adding new dependencies:

```bash
npm install --save-dev package-name  # For development dependencies
npm install package-name              # For production dependencies (rare for this project)
```

## Testing Your Changes

### Local Development

Start the Hugo development server:

```bash
npm run dev
```

Visit `http://localhost:1313` to see your changes.

### Build Locally

Test the production build:

```bash
npm run build
```

This creates the `public/` directory with the built site.

### Preview with Wrangler

Test with Cloudflare Workers locally:

```bash
npm run preview
```

This runs the Worker locally with static assets support.

### Clean Build Artifacts

Remove generated files:

```bash
npm run clean
```

## Submitting Changes

### Creating a Pull Request

1. **Push your branch**:

   ```bash
   git push origin your-branch-name
   ```

2. **Open a Pull Request** on GitHub

3. **PR Title**: Use conventional commit format
   - Example: `feat: add search functionality to sidebar`

4. **PR Description** should include:
   - What changes were made
   - Why the changes are needed
   - Any breaking changes
   - Related issues (use `Fixes #123` to auto-close issues)

### PR Review Process

1. Automated checks will run (if configured)
2. A maintainer will review your code
3. Address any feedback
4. Once approved, your PR will be merged

## Release Process

We use **semantic versioning** and **standard-version** for releases.

### Version Bumping

Versions are automatically determined by commit types:

- `feat:` commits trigger minor version bump (1.0.0 → 1.1.0)
- `fix:` commits trigger patch version bump (1.0.0 → 1.0.1)
- `BREAKING CHANGE:` in commit body triggers major version bump (1.0.0 → 2.0.0)

### Release Commands (Maintainers Only)

```bash
# Automatic version detection
npm run release

# Specific version types
npm run release:patch  # 1.0.0 → 1.0.1
npm run release:minor  # 1.0.0 → 1.1.0
npm run release:major  # 1.0.0 → 2.0.0

# Preview without making changes
npm run release:dry-run
```

This will:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a git commit and tag
4. Push with `git push --follow-tags`

## Available Scripts

| Script                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `npm run dev`             | Start Hugo development server with drafts |
| `npm run build`           | Build production site with minification   |
| `npm run build:preview`   | Build with drafts and future posts        |
| `npm run preview`         | Preview with Wrangler locally             |
| `npm run deploy`          | Deploy to Cloudflare Workers (production) |
| `npm run deploy:preview`  | Deploy preview environment                |
| `npm run clean`           | Remove build artifacts                    |
| `npm run commit`          | Launch Commitizen for commits             |
| `npm run lint`            | Check code formatting                     |
| `npm run lint:fix`        | Auto-fix formatting issues                |
| `npm run format`          | Alias for lint:fix                        |
| `npm run release`         | Create a new release                      |
| `npm run release:dry-run` | Preview release changes                   |

## Project Structure

```
.
├── .husky/              # Git hooks configuration
├── config/              # Hugo configuration (modular)
│   ├── _default/        # Default configuration
│   ├── development/     # Development overrides
│   └── production/      # Production overrides
├── content/             # Markdown content for site
│   ├── _index.md        # Homepage
│   └── docs/            # Documentation pages
├── static/              # Static assets
│   └── _headers         # Cloudflare Pages headers
├── themes/book/         # Hugo Book theme
├── .editorconfig        # Editor configuration
├── .nvmrc              # Node version specification
├── .prettierrc         # Prettier configuration
├── .prettierignore     # Prettier ignore patterns
├── .versionrc.json     # Standard-version configuration
├── CHANGELOG.md        # Release history
├── commitlint.config.js # Commit message linting
├── hugo.toml           # Main Hugo configuration
├── package.json        # Dependencies and scripts
└── wrangler.toml       # Cloudflare Workers config
```

## Getting Help

### Documentation Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Book Theme Documentation](https://github.com/alex-shpak/hugo-book)

### Reporting Issues

When reporting issues, please include:

1. Description of the problem
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Environment details (OS, Node version, Hugo version)

### Questions?

- Open a
  [GitHub Discussion](https://github.com/taslabs-net/cloudflarepages-hugo/discussions)
- Create an [Issue](https://github.com/taslabs-net/cloudflarepages-hugo/issues)
- Check existing issues for similar problems

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a
welcoming environment for all contributors.

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.

---

Thank you for contributing to make this project better! 🚀
