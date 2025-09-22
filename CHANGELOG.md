# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Husky for Git hooks management
- Commitizen for standardized commit messages
- Commitlint for commit message validation
- Lint-staged for pre-commit code formatting
- Prettier configuration for consistent code style
- npm scripts for development workflow (clean, commit, lint, format)
- .nvmrc file for Node.js version management (v22 LTS)
- .editorconfig for consistent coding styles across editors
- standard-version for automated versioning and changelog generation
- .prettierignore to exclude Hugo templates and generated files

### Changed

- Updated .gitignore to exclude Claude AI folders
- Updated Node.js engine requirement to >=20.0.0
- Updated npm engine requirement to >=10.0.0
- Applied Prettier formatting to all content files

## [1.0.1] - 2025-07-30

### Changed

- Removed git submodule dependency

## [1.0.0] - Initial Release

### Added

- Hugo documentation template
- Cloudflare Workers integration
- Book theme for documentation
- Basic content structure
- Wrangler configuration for deployment
