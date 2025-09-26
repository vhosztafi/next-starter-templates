# Auth0 Setup Instructions

This project has been configured to use Auth0 for authentication. Follow these steps to complete the setup:

## 1. Create an Auth0 Account and Application

1. Go to [Auth0 Dashboard](https://manage.auth0.com/) and sign up for a free account
2. Create a new application:
   - Click "Applications" in the sidebar
   - Click "Create Application"
   - Choose "Regular Web Applications"
   - Give it a name (e.g., "Next.js Starter App")

## 2. Configure Your Auth0 Application

1. In your Auth0 application settings, configure the following:

### Allowed Callback URLs

```
http://localhost:3000/auth/callback
```

### Allowed Logout URLs

```
http://localhost:3000
```

### Allowed Web Origins

```
http://localhost:3000
```

## 3. Set Up Environment Variables

1. Copy the `env.example` file to `.env.local`:

   ```bash
   cp env.example .env.local
   ```

2. Fill in your Auth0 credentials in `.env.local`:

   ```env
   AUTH0_SECRET=use [openssl rand -hex 32] to generate a 32 bytes value
   AUTH0_DOMAIN=YOUR_DOMAIN.auth0.com
   AUTH0_CLIENT_ID=your_client_id_here
   AUTH0_CLIENT_SECRET=your_client_secret_here
   APP_BASE_URL=http://localhost:3000
   ```

3. Generate a secret for `AUTH0_SECRET`:

   ```bash
   openssl rand -hex 32
   ```

4. Replace `YOUR_DOMAIN` with your Auth0 domain (found in your Auth0 dashboard)
5. Replace `your_client_id_here` and `your_client_secret_here` with the values from your Auth0 application

## 4. Run the Application

```bash
pnpm dev
```

## 5. Test the Authentication

1. Visit `http://localhost:3000`
2. Click "Sign In" to test the Auth0 login flow
3. After successful login, you should be redirected to the dashboard
4. Test the logout functionality

## Features Included

- ✅ Auth0 authentication with Next.js App Router
- ✅ Protected routes using middleware
- ✅ Server-side session handling
- ✅ Client-side user state management
- ✅ Login/logout functionality
- ✅ Error handling for authentication failures
- ✅ Responsive UI with Tailwind CSS

## Routes

- `/` - Home page with login/logout functionality
- `/dashboard` - Protected dashboard (requires authentication)
- `/auth/login` - Login page
- `/auth/error` - Authentication error page
- `/api/auth/*` - Auth0 API routes (handled automatically)

## Middleware Protection

The middleware automatically protects all routes except:

- `/api/auth/*` (Auth0 routes)
- Static files (`_next/static`, `_next/image`, etc.)
- Favicon and public assets

## Troubleshooting

### Common Issues

1. **"Invalid redirect_uri" error**: Make sure your callback URL is exactly `http://localhost:3000/auth/callback` in your Auth0 application settings.

2. **"Invalid client" error**: Verify your `AUTH0_CLIENT_ID` and `AUTH0_CLIENT_SECRET` are correct.

3. **"Invalid issuer" error**: Make sure your `AUTH0_ISSUER_BASE_URL` is correct and includes `https://` and your domain.

4. **Session not persisting**: Ensure your `AUTH0_SECRET` is set and is a valid 32-byte hex string.

### Getting Help

- [Auth0 Next.js SDK Documentation](https://auth0.com/docs/quickstart/webapp/nextjs)
- [Auth0 Community](https://community.auth0.com/)
- [Next.js Documentation](https://nextjs.org/docs)
