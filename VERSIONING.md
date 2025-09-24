# Versioning Strategy for @solutioniser/create-next-starter

## Semantic Versioning (SemVer)

We follow [Semantic Versioning](https://semver.org/) with the format: `MAJOR.MINOR.PATCH`

### Version Number Meanings

- **MAJOR (1.0.0)**: Breaking changes to CLI interface or template structure
- **MINOR (1.1.0)**: New features, new auth providers, new overlays
- **PATCH (1.0.1)**: Bug fixes, documentation updates, dependency updates

### Examples

```
0.1.0  → 0.1.1  (Bug fix)
0.1.1  → 0.2.0  (New auth provider)
0.2.0  → 0.2.1  (Documentation update)
0.2.1  → 1.0.0  (Breaking change - CLI interface change)
1.0.0  → 1.1.0  (New feature - Storybook overlay)
1.1.0  → 1.1.1  (Bug fix)
```

## Pre-release Versions

For testing and development:

- **Alpha**: `1.0.0-alpha.1` (Internal testing)
- **Beta**: `1.0.0-beta.1` (Public testing)
- **RC**: `1.0.0-rc.1` (Release candidate)

## Version Bumping Workflow

### 1. Automatic Version Bumping

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major

# Pre-release versions
npm version prerelease --preid=alpha
npm version prerelease --preid=beta
npm version prerelease --preid=rc
```

### 2. Manual Version Setting

```bash
# Set specific version
npm version 1.2.3

# Set pre-release version
npm version 1.2.3-beta.1
```

### 3. GitHub Workflow Integration

The GitHub workflow automatically publishes when you push a tag:

```bash
# Create and push tag
git tag v1.0.0
git push origin v1.0.0

# Or use npm version (creates tag automatically)
npm version patch
git push origin main --tags
```

## Version History Examples

### Development Phase (0.x.x)
```
0.1.0 - Initial release with basic functionality
0.1.1 - Fix CLI argument parsing
0.1.2 - Update dependencies
0.2.0 - Add Clerk authentication provider
0.2.1 - Fix Clerk configuration
0.3.0 - Add Storybook overlay
0.3.1 - Update Storybook to latest version
0.4.0 - Add Supabase authentication provider
0.4.1 - Fix Supabase middleware
0.5.0 - Add Auth0 authentication provider
0.5.1 - Update documentation
```

### Stable Phase (1.x.x)
```
1.0.0 - First stable release
1.0.1 - Bug fixes
1.1.0 - Add MSAL authentication provider
1.1.1 - Fix MSAL configuration
1.2.0 - Add database overlay options
1.2.1 - Update dependencies
```

## Pre-release Testing Strategy

### Alpha Testing (Internal)
```bash
npm version prerelease --preid=alpha
# Creates: 1.0.0-alpha.1
git push origin main --tags
```

### Beta Testing (Public)
```bash
npm version prerelease --preid=beta
# Creates: 1.0.0-beta.1
git push origin main --tags
```

### Release Candidate
```bash
npm version prerelease --preid=rc
# Creates: 1.0.0-rc.1
git push origin main --tags
```

### Final Release
```bash
npm version 1.0.0
git push origin main --tags
```

## Version Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "version:patch": "npm version patch && git push origin main --tags",
    "version:minor": "npm version minor && git push origin main --tags",
    "version:major": "npm version major && git push origin main --tags",
    "version:alpha": "npm version prerelease --preid=alpha && git push origin main --tags",
    "version:beta": "npm version prerelease --preid=beta && git push origin main --tags",
    "version:rc": "npm version prerelease --preid=rc && git push origin main --tags"
  }
}
```

## Best Practices

### 1. Version Bumping Rules
- **Patch**: Bug fixes, documentation, dependency updates
- **Minor**: New features, new providers, new overlays
- **Major**: Breaking changes, CLI interface changes

### 2. Pre-release Usage
- Use alpha for internal testing
- Use beta for public testing
- Use rc for release candidates
- Always test pre-releases before final release

### 3. Tag Management
- Always push tags to trigger GitHub Actions
- Use descriptive commit messages
- Keep changelog updated

### 4. Communication
- Announce major releases
- Document breaking changes
- Provide migration guides for major versions

## Changelog Integration

Keep a `CHANGELOG.md` file:

```markdown
# Changelog

## [1.0.0] - 2024-01-15

### Added
- Initial stable release
- Support for 5 authentication providers
- Storybook integration
- Interactive CLI

### Changed
- Breaking: CLI interface updated

## [0.5.0] - 2024-01-10

### Added
- Auth0 authentication provider
- Enhanced error handling

### Fixed
- Supabase middleware configuration
```

## Automated Changelog

Consider using tools like:
- `conventional-changelog`
- `standard-version`
- `release-please`

These can automatically generate changelogs from commit messages.
