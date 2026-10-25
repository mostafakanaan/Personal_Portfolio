# Security Policy

## Security Best Practices

This portfolio follows security best practices to protect user data and maintain secure operations.

### 1. Environment Variables

- **Never commit sensitive keys** to version control
- Use `.env.local` for local development (already in `.gitignore`)
- API keys with `VITE_` prefix are exposed in the client bundle - only use for non-sensitive configuration
- Sensitive operations should always be handled server-side

### Chat assistant (KanaanChat)

The chat used to send the LLM key from the browser (`VITE_LLM_KEY` → `X-LLM-Key`),
which put the key in the public JS bundle. The chat is now disabled
(`FEATURES.chat` in `src/config/features.js`) and the client no longer sends a key.

To turn it back on:

1. Rotate `LLM_KEY` on the LLM wrapper and update the `LLM_KEY` GitHub secret.
   The old key was public and must be treated as compromised.
2. Make nginx add the key when proxying (the deploy workflow already writes
   `/etc/nginx/snippets/llm_key.conf`):

   ```nginx
   location /api/llm/ {
       include /etc/nginx/snippets/llm_key.conf;
       proxy_set_header X-LLM-Key $llm_key;
       limit_req zone=llm burst=5 nodelay;   # optional rate limit
       proxy_pass http://127.0.0.1:<wrapper-port>/;
   }
   ```

   Until then you can block the endpoint with `location /api/llm/ { return 503; }`.
3. Set `FEATURES.chat = true` and redeploy.

### 2. Content Security Policy (CSP)

When deploying, consider adding these security headers in your web server configuration:

```nginx
# Example Nginx configuration
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' http://raspberrypi;" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### 3. External Links

- All external links use `rel="noreferrer"` to prevent referrer leakage
- Target `_blank` links include proper security attributes

### 4. Input Sanitization

- User inputs in ChatPage are properly handled
- API responses are validated before rendering
- Error messages don't expose sensitive system information

### 5. Dependency Management

- Regularly update dependencies: `npm audit` and `npm update`
- Review security advisories for React and Vite
- Use `npm audit fix` to automatically fix vulnerabilities

### 6. Build Security

- Production builds are minified and optimized
- Source maps can be disabled in production for additional security
- Environment variables are validated at build time

## Reporting a Vulnerability

If you discover a security vulnerability in this project:

1. **Do not** create a public GitHub issue
2. Email security concerns to: mos.kan@hotmail.com
3. Include detailed steps to reproduce the issue
4. Allow reasonable time for a response before public disclosure

## Security Updates

- Dependencies are reviewed and updated regularly
- Security patches are applied promptly
- Breaking changes are documented in release notes
