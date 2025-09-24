# Testing and Version Overwrite Strategy

## NPM Version Overwrite Rules

**❌ You CANNOT overwrite the same version on NPM**
- Once published, a version is immutable
- NPM prevents overwriting for security and stability reasons
- Users expect version `1.0.0` to always be the same

## ✅ Solutions for Testing and Development

### 1. **Pre-release Versions (Recommended)**

Use pre-release versions for testing:

```bash
# Alpha testing (internal)
npm version prerelease --preid=alpha
# Creates: 0.1.1-alpha.1

# Beta testing (public)
npm version prerelease --preid=beta  
# Creates: 0.1.1-beta.1

# Release candidate
npm version prerelease --preid=rc
# Creates: 0.1.1-rc.1
```

**Benefits:**
- Can be overwritten (unpublish within 72 hours)
- Clear indication it's for testing
- Users can opt-in to testing versions

### 2. **Scoped Testing Package**

Create a separate testing package:

```bash
# Publish to testing scope
npm publish --tag testing
# Or use a different package name
npm publish @solutioniser/create-next-starter-test
```

### 3. **Local Testing**

Test locally before publishing:

```bash
# Test locally
cd packages/create-next-starter
pnpm build
node dist/index.js test-project --provider authjs

# Test with npm link
npm link
# Then test from anywhere
create-next-starter test-project --provider clerk
```

### 4. **NPM Unpublish (Limited Time)**

You can unpublish within 72 hours:

```bash
# Unpublish (only within 72 hours)
npm unpublish @solutioniser/create-next-starter@0.1.0

# Then republish with same version
npm publish
```

**⚠️ Warning:** Only works within 72 hours and only if no one has downloaded it.

## 🧪 Recommended Testing Workflow

### Phase 1: Local Development
```bash
# 1. Test locally
pnpm build
node dist/index.js test-project --provider authjs
rm -rf test-project

# 2. Test with npm link
npm link
create-next-starter test-project --provider clerk
npm unlink
```

### Phase 2: Alpha Testing
```bash
# 1. Create alpha version
npm version prerelease --preid=alpha
git push origin main --tags

# 2. Test with alpha version
npm install -g @solutioniser/create-next-starter@0.1.1-alpha.1
create-next-starter test-project --provider authjs

# 3. If issues found, fix and create new alpha
npm version prerelease --preid=alpha
git push origin main --tags
```

### Phase 3: Beta Testing
```bash
# 1. Create beta version
npm version prerelease --preid=beta
git push origin main --tags

# 2. Share with community for testing
npm install -g @solutioniser/create-next-starter@0.1.1-beta.1
```

### Phase 4: Release Candidate
```bash
# 1. Create release candidate
npm version prerelease --preid=rc
git push origin main --tags

# 2. Final testing
npm install -g @solutioniser/create-next-starter@0.1.1-rc.1
```

### Phase 5: Final Release
```bash
# 1. Create final version
npm version 0.1.1
git push origin main --tags

# 2. Publish stable version
npm publish
```

## 🔧 Testing Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "test:local": "pnpm build && node dist/index.js test-local --yes && rm -rf test-local",
    "test:alpha": "npm version prerelease --preid=alpha && git push origin main --tags",
    "test:beta": "npm version prerelease --preid=beta && git push origin main --tags",
    "test:rc": "npm version prerelease --preid=rc && git push origin main --tags",
    "release": "npm version patch && git push origin main --tags"
  }
}
```

## 📊 Version Testing Matrix

| Version Type | Purpose | Can Overwrite | Example |
|--------------|---------|---------------|---------|
| `0.1.0` | Stable release | ❌ No | `0.1.0` |
| `0.1.1-alpha.1` | Internal testing | ✅ Yes (72h) | `0.1.1-alpha.1` |
| `0.1.1-beta.1` | Public testing | ✅ Yes (72h) | `0.1.1-beta.1` |
| `0.1.1-rc.1` | Release candidate | ✅ Yes (72h) | `0.1.1-rc.1` |

## 🚨 Emergency Procedures

### If You Need to Fix a Published Version

1. **Within 72 hours:**
   ```bash
   npm unpublish @solutioniser/create-next-starter@0.1.0
   # Fix the issue
   npm publish
   ```

2. **After 72 hours:**
   ```bash
   # Create patch version
   npm version patch
   git push origin main --tags
   # Publish fix
   npm publish
   ```

3. **For major issues:**
   ```bash
   # Create new major version
   npm version major
   git push origin main --tags
   # Publish fixed version
   npm publish
   ```

## 🎯 Best Practices

### 1. **Always Test Locally First**
```bash
pnpm build
node dist/index.js test-project --provider authjs
```

### 2. **Use Pre-release Versions**
```bash
npm version prerelease --preid=alpha
```

### 3. **Test with Real Scenarios**
```bash
# Test all providers
node dist/index.js test-authjs --provider authjs --yes
node dist/index.js test-clerk --provider clerk --yes
node dist/index.js test-supabase --provider supabase --yes
```

### 4. **Document Breaking Changes**
```markdown
## Breaking Changes in v1.0.0
- CLI interface updated
- New required parameters
- Migration guide available
```

### 5. **Use Semantic Versioning**
- Patch: Bug fixes
- Minor: New features
- Major: Breaking changes

## 🔍 Testing Checklist

Before publishing any version:

- [ ] Test locally with `pnpm build && node dist/index.js`
- [ ] Test all authentication providers
- [ ] Test with and without Storybook
- [ ] Test with different package managers
- [ ] Verify environment variable handling
- [ ] Check error handling
- [ ] Test on different Node.js versions
- [ ] Verify GitHub Actions workflow

## 📝 Example Testing Session

```bash
# 1. Local testing
pnpm build
node dist/index.js test-basic --yes
rm -rf test-basic

# 2. Test with auth providers
node dist/index.js test-authjs --provider authjs --yes
rm -rf test-authjs

node dist/index.js test-clerk --provider clerk --yes
rm -rf test-clerk

# 3. Test with Storybook
node dist/index.js test-storybook --storybook --yes
rm -rf test-storybook

# 4. Create alpha version
npm version prerelease --preid=alpha
git push origin main --tags

# 5. Test alpha version
npm install -g @solutioniser/create-next-starter@0.1.1-alpha.1
create-next-starter test-alpha --provider authjs
rm -rf test-alpha

# 6. If good, create beta
npm version prerelease --preid=beta
git push origin main --tags
```

This approach ensures you can test thoroughly while maintaining version integrity for your users.
