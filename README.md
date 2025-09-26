# Next.js Starter Templates

This repository contains the template files for the `@solutioniser/create-next-starter` CLI tool.

## Template Structure

- `base/` - Base Next.js template with common configurations
- `overlays/` - Optional overlays for different features:
  - `authjs/` - Auth.js (NextAuth) authentication
  - `clerk/` - Clerk authentication
  - `auth0/` - Auth0 authentication
  - `supabase/` - Supabase authentication
  - `msal/` - Microsoft Authentication Library (Azure AD)
  - `storybook/` - Storybook integration

## Usage

This repository is used by the `@solutioniser/create-next-starter` CLI tool. Users don't typically interact with this repository directly.

## Versioning

This repository uses semantic versioning. Each release tag corresponds to a template version that the CLI can use.

### Release Process

We use GitHub Actions for automated releases. To create a new release:

1. Go to the **Actions** tab in GitHub
2. Select **Release Templates** workflow
3. Click **Run workflow**
4. Choose the version bump type:
   - **patch**: Bug fixes, documentation updates
   - **minor**: New features, new overlays
   - **major**: Breaking changes
   - **alpha/beta/rc**: Pre-release versions

The workflow will:
- Bump the version in `package.json`
- Update template versions automatically
- Generate changelog entries
- Create a GitHub release
- Tag the repository

### Manual Release

You can also create releases manually:

```bash
# Install dependencies
pnpm install

# Bump version
npm version patch  # or minor, major, alpha, beta, rc

# Push changes and tags
git push origin main --tags
```

## Development

To update templates:

1. Make your changes to the template files
2. Test with the CLI tool
3. Use the GitHub Actions workflow or manual release process
4. The CLI will automatically use the latest version

## CLI Usage

```bash
# Use latest templates
npx @solutioniser/create-next-starter my-app

# Use specific template version
npx @solutioniser/create-next-starter my-app --template-tag v1.2.3
```
