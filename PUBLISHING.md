# Publishing Guide for Next.js Starter Templates

This guide explains how to publish and distribute your Next.js starter template CLI tool.

## 🚀 Publishing to NPM

### Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **Login**: `npm login` in your terminal
3. **Unique Package Name**: Update `@me/create-next-starter` to your own scope

### Step 1: Update Package Metadata

```bash
cd packages/create-next-starter
```

Update the following in `package.json`:
- `name`: Change `@me/create-next-starter` to `@yourusername/create-next-starter`
- `author`: Add your name and email
- `repository.url`: Update to your GitHub repository
- `homepage`: Update to your repository URL
- `bugs.url`: Update to your repository issues URL

### Step 2: Build and Test

```bash
# Build the CLI tool
pnpm build

# Test locally
node dist/index.js test-project --provider authjs --storybook

# Test in a new directory
cd /tmp
node /path/to/your/project/dist/index.js test-project --provider supabase
```

### Step 3: Publish

```bash
# Dry run first (optional)
npm publish --dry-run

# Publish to NPM
npm publish

# For scoped packages, make them public
npm publish --access public
```

## 📦 Distribution Methods

### Method 1: NPM Global Installation (Recommended)

Users install globally and use anywhere:

```bash
# Install globally
npm install -g @yourusername/create-next-starter

# Use anywhere
create-next-starter my-app --provider clerk --storybook
```

### Method 2: NPX (No Installation Required)

Users can run without installing:

```bash
# Run directly with npx
npx @yourusername/create-next-starter my-app --provider auth0

# Or with specific version
npx @yourusername/create-next-starter@latest my-app --provider supabase
```

### Method 3: GitHub Repository

Users can clone and use directly:

```bash
# Clone repository
git clone https://github.com/yourusername/next-starter-templates.git
cd next-starter-templates/packages/create-next-starter

# Install and build
npm install
npm run build

# Use locally
node dist/index.js my-app --provider authjs
```

## 🎯 Marketing and Promotion

### 1. GitHub Repository Setup

- [ ] Add comprehensive README with examples
- [ ] Create GitHub releases for version tags
- [ ] Add GitHub Actions for automated testing
- [ ] Create issue templates for bug reports and feature requests
- [ ] Add contributing guidelines

### 2. Documentation

- [ ] Create detailed setup guides for each auth provider
- [ ] Add video tutorials or GIFs showing the CLI in action
- [ ] Create comparison table of auth providers
- [ ] Add troubleshooting section

### 3. Community Engagement

- [ ] Share on Reddit (r/nextjs, r/reactjs, r/webdev)
- [ ] Post on Twitter/X with hashtags #nextjs #react #typescript
- [ ] Submit to awesome-nextjs lists
- [ ] Create blog posts about the tool
- [ ] Present at local meetups or conferences

## 🔄 Version Management

### Semantic Versioning

- **Major (1.0.0)**: Breaking changes to CLI interface
- **Minor (1.1.0)**: New features, new auth providers, new overlays
- **Patch (1.0.1)**: Bug fixes, documentation updates

### Release Process

```bash
# Update version
npm version patch  # or minor, major

# Push tags
git push --tags

# Publish to NPM
npm publish
```

## 📊 Usage Analytics

Consider adding optional analytics to understand usage:

```typescript
// In create-project.ts
async function trackUsage(options: ProjectOptions) {
  try {
    // Optional: Send anonymous usage data
    await fetch('https://your-analytics-endpoint.com/usage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provider: options.provider,
        storybook: options.storybook,
        pm: options.pm,
        timestamp: new Date().toISOString()
      })
    })
  } catch {
    // Fail silently
  }
}
```

## 🛡️ Security Considerations

### 1. Code Signing

```bash
# Generate signing key
npm install -g @npmcli/arborist
npm config set sign-git-tag true
```

### 2. Audit Dependencies

```bash
# Regular security audits
npm audit
npm audit fix
```

### 3. Template Security

- Ensure all templates use latest secure versions
- Regular dependency updates
- Security headers in base template
- Environment variable validation

## 📈 Growth Strategies

### 1. Feature Expansion

- [ ] Add more auth providers (Firebase, AWS Cognito)
- [ ] Add database overlays (Prisma, Drizzle)
- [ ] Add deployment overlays (Vercel, Netlify)
- [ ] Add UI library overlays (Mantine, Chakra UI)

### 2. Enterprise Features

- [ ] Private template repositories
- [ ] Custom template creation
- [ ] Team collaboration features
- [ ] Enterprise support

### 3. Integration Ecosystem

- [ ] VS Code extension
- [ ] GitHub Actions integration
- [ ] CI/CD pipeline templates
- [ ] Monitoring and analytics overlays

## 🎉 Success Metrics

Track these metrics to measure success:

- **Downloads**: NPM download counts
- **GitHub Stars**: Repository popularity
- **Issues/PRs**: Community engagement
- **User Feedback**: GitHub discussions, Twitter mentions
- **Template Usage**: Which providers/overlays are most popular

## 📝 Example Marketing Copy

### NPM Package Description

```
🚀 Create Next.js apps with authentication in seconds! 

Features:
✅ 5+ Auth providers (Auth.js, Clerk, Auth0, Supabase, MSAL)
✅ TypeScript + Tailwind CSS + Testing setup
✅ Storybook integration
✅ Modern tooling (ESLint, Prettier, Husky)
✅ Interactive CLI with smart defaults

Usage: npx @yourusername/create-next-starter my-app --provider clerk
```

### Social Media Posts

**Twitter/X:**
```
🚀 Just shipped a new CLI tool for Next.js developers!

Create production-ready Next.js apps with authentication in seconds:
• 5+ auth providers (Auth.js, Clerk, Auth0, Supabase, MSAL)
• TypeScript + Tailwind + Testing setup
• Interactive CLI with smart defaults

Try it: npx @yourusername/create-next-starter my-app --provider clerk

#nextjs #react #typescript #webdev
```

**Reddit (r/nextjs):**
```
I built a CLI tool that creates Next.js starter apps with authentication in seconds. It supports 5+ auth providers, includes TypeScript/Tailwind/testing setup, and has an interactive CLI. Would love feedback from the community!

GitHub: [link]
NPM: npx @yourusername/create-next-starter
```

## 🔧 Maintenance

### Regular Tasks

- [ ] Update dependencies monthly
- [ ] Monitor for security vulnerabilities
- [ ] Respond to issues and PRs
- [ ] Update documentation
- [ ] Test with latest Next.js versions
- [ ] Community engagement

### Automated Tasks

Set up GitHub Actions for:
- [ ] Automated testing on Node.js versions
- [ ] Dependency updates (Dependabot)
- [ ] Security scanning
- [ ] Build and publish on release tags
