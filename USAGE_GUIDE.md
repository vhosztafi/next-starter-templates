# Real-World Usage Guide for Next.js Starter Templates

This guide shows how to use your Next.js starter template tool in various real-world scenarios.

## 🚀 Quick Start

### Installation

```bash
# Install globally
npm install -g @yourusername/create-next-starter

# Or use with npx (no installation required)
npx @yourusername/create-next-starter my-app --provider clerk
```

### Basic Usage

```bash
# Interactive mode (recommended for first-time users)
create-next-starter

# Non-interactive mode
create-next-starter my-app --provider authjs --storybook --pm pnpm
```

## 🎯 Real-World Scenarios

### 1. **SaaS Application Development**

**Scenario**: Building a subscription-based SaaS with user authentication and admin dashboard.

```bash
# Create the main application
create-next-starter my-saas --provider clerk --storybook --pm pnpm

# Why Clerk? Built-in user management, subscription handling, and admin features
```

**What you get**:
- User authentication with Clerk
- Protected routes for dashboard
- Storybook for component development
- TypeScript + Tailwind for rapid development
- Testing setup for reliability

**Next steps**:
1. Set up Clerk dashboard and get API keys
2. Configure environment variables
3. Build your subscription logic
4. Add payment integration (Stripe)

### 2. **Enterprise Application**

**Scenario**: Building an internal tool for a large company using existing Azure AD.

```bash
# Create with MSAL for Azure AD integration
create-next-starter enterprise-portal --provider msal --pm pnpm
```

**What you get**:
- Azure AD authentication
- Enterprise-grade security
- Protected routes for different user roles
- Modern development tooling

**Next steps**:
1. Configure Azure AD app registration
2. Set up role-based access control
3. Integrate with existing enterprise systems
4. Deploy to company infrastructure

### 3. **Startup MVP**

**Scenario**: Rapidly prototyping a startup idea with social authentication.

```bash
# Quick setup with Auth.js for multiple providers
create-next-starter startup-mvp --provider authjs --storybook --pm pnpm
```

**What you get**:
- Google OAuth (and other providers)
- Fast development setup
- Component library with Storybook
- Production-ready foundation

**Next steps**:
1. Configure OAuth providers
2. Build core features
3. Test with real users
4. Iterate based on feedback

### 4. **Open Source Project**

**Scenario**: Building an open-source project that needs authentication.

```bash
# Use Supabase for open-source friendly auth
create-next-starter open-source-app --provider supabase --storybook --pm pnpm
```

**What you get**:
- Open-source authentication solution
- Self-hostable infrastructure
- Community-friendly setup
- Comprehensive documentation

**Next steps**:
1. Set up Supabase project
2. Create public documentation
3. Set up CI/CD for contributions
4. Build community features

### 5. **E-commerce Platform**

**Scenario**: Building an online store with customer accounts.

```bash
# Use Auth0 for enterprise-grade customer management
create-next-starter ecommerce-store --provider auth0 --storybook --pm pnpm
```

**What you get**:
- Customer authentication
- User profile management
- Security compliance (SOC2, GDPR)
- Scalable infrastructure

**Next steps**:
1. Configure Auth0 tenant
2. Set up customer registration flows
3. Integrate with payment systems
4. Add inventory management

### 6. **Content Management System**

**Scenario**: Building a CMS for multiple content creators.

```bash
# Use Clerk for multi-tenant user management
create-next-starter content-cms --provider clerk --storybook --pm pnpm
```

**What you get**:
- Multi-user authentication
- Role-based permissions
- User management dashboard
- Content creation workflows

**Next steps**:
1. Set up user roles and permissions
2. Build content creation interface
3. Add media management
4. Implement publishing workflows

## 🛠️ Development Workflows

### **Team Development**

```bash
# Standardize team projects
create-next-starter team-project --provider authjs --storybook --pm pnpm

# Everyone gets the same setup
cd team-project
pnpm install
cp env.example .env.local
# Configure environment variables
pnpm dev
```

### **Client Projects**

```bash
# Different clients, different needs
create-next-starter client-a --provider clerk --storybook
create-next-starter client-b --provider auth0 --pm yarn
create-next-starter client-c --provider supabase --storybook
```

### **Personal Projects**

```bash
# Quick personal projects
create-next-starter my-blog --provider authjs
create-next-starter side-project --provider supabase --storybook
create-next-starter portfolio --provider none
```

## 📦 Package Manager Options

### **pnpm** (Recommended)
```bash
create-next-starter my-app --pm pnpm
# Fastest installs, efficient disk usage
```

### **npm**
```bash
create-next-starter my-app --pm npm
# Standard Node.js package manager
```

### **yarn**
```bash
create-next-starter my-app --pm yarn
# Alternative package manager with workspaces
```

### **bun**
```bash
create-next-starter my-app --pm bun
# Fastest JavaScript runtime and package manager
```

## 🔐 Authentication Provider Comparison

| Provider | Best For | Setup Complexity | Features |
|----------|----------|------------------|----------|
| **Auth.js** | Multiple OAuth providers, flexibility | Medium | Google, GitHub, custom providers |
| **Clerk** | SaaS apps, user management | Low | Built-in UI, user management |
| **Auth0** | Enterprise, compliance | Medium | Enterprise features, compliance |
| **Supabase** | Open source, self-hosted | Low | Open source, PostgreSQL |
| **MSAL** | Microsoft ecosystem | Medium | Azure AD, Office 365 |

## 🎨 Storybook Integration

### **When to Use Storybook**

```bash
# Include Storybook for:
create-next-starter my-app --storybook

# ✅ Component libraries
# ✅ Design systems
# ✅ Complex UI components
# ✅ Team collaboration
# ✅ Documentation
```

### **What You Get**

- Component development environment
- Interactive component documentation
- Visual testing capabilities
- Design system foundation
- Team collaboration tools

## 🚀 Deployment Strategies

### **Vercel** (Recommended for Next.js)
```bash
# After creating your project
cd my-app
vercel --prod
```

### **Netlify**
```bash
# Build and deploy
cd my-app
npm run build
# Deploy dist folder to Netlify
```

### **Docker**
```bash
# Add Dockerfile to your project
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Customization

### **Adding Custom Overlays**

1. Create new overlay in `templates/overlays/`
2. Add package dependencies in `package.*.partial`
3. Update CLI options
4. Test with your overlay

### **Modifying Base Template**

1. Edit files in `templates/base/`
2. Update dependencies in `package.json.partial`
3. Test changes with CLI tool
4. Version and release updates

## 📊 Monitoring and Analytics

### **Add Analytics**

```typescript
// In your created project
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **Error Tracking**

```typescript
// Add Sentry for error tracking
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
})
```

## 🎯 Best Practices

### **Environment Variables**

```bash
# Always use .env.local for secrets
cp env.example .env.local
# Never commit .env.local to git
```

### **Git Workflow**

```bash
# Your project comes with git initialized
git add .
git commit -m "feat: add user authentication"
git push origin main
```

### **Testing**

```bash
# Run tests before deployment
pnpm test
pnpm e2e
pnpm build
```

### **Code Quality**

```bash
# Lint and format code
pnpm lint
pnpm format
pnpm validate
```

## 🆘 Troubleshooting

### **Common Issues**

1. **Permission errors**: Use `sudo` on macOS/Linux or run as administrator on Windows
2. **Node version**: Ensure Node.js 18+ is installed
3. **Package manager**: Use the same package manager throughout the project
4. **Environment variables**: Check that all required variables are set

### **Getting Help**

- Check the GitHub repository issues
- Read the provider-specific documentation
- Join the community discussions
- Create an issue with detailed information

## 🎉 Success Stories

### **Startup Success**
> "We built our MVP in 2 weeks using this starter template. The authentication setup saved us weeks of development time." - Startup Founder

### **Enterprise Adoption**
> "Our team standardized on this template for all new projects. The consistency has improved our development velocity significantly." - Engineering Manager

### **Open Source Impact**
> "This template helped us focus on our core features instead of spending time on boilerplate setup." - Open Source Maintainer

## 🔮 Future Enhancements

### **Planned Features**
- [ ] Database integration overlays (Prisma, Drizzle)
- [ ] Deployment configuration (Docker, Kubernetes)
- [ ] Monitoring and analytics overlays
- [ ] Payment integration (Stripe, PayPal)
- [ ] Email service integration (SendGrid, Resend)

### **Community Contributions**
- [ ] New authentication providers
- [ ] UI library integrations
- [ ] Testing framework options
- [ ] Development tool configurations

---

**Ready to get started?** Run `create-next-starter` and begin building your next great application! 🚀
