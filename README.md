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

## Development

To update templates:

1. Make your changes to the template files
2. Test with the CLI tool
3. Create a new release with a semantic version tag
4. The CLI will automatically use the latest version

## CLI Usage

```bash
# Use latest templates
npx @solutioniser/create-next-starter my-app

# Use specific template version
npx @solutioniser/create-next-starter my-app --template-tag v1.2.3
```
