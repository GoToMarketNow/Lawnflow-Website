# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Here are the versions currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.7.x   | :white_check_mark: |
| 0.6.x   | :white_check_mark: |
| < 0.6   | :x:                |

## Reporting a Vulnerability

We take the security of LawnFlow.ai marketing website seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:
- Open a public GitHub issue for security vulnerabilities
- Publicly disclose the vulnerability before it has been addressed

### Please DO:
1. **Email us directly** at security@lawnflow.ai with:
   - Type of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if you have one)

2. **Allow us time to respond**: We will acknowledge receipt within 48 hours and will send a more detailed response within 5 days.

3. **Work with us**: We may need additional information from you to understand and address the issue.

## What to Report

Examples of security vulnerabilities:
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Authentication/Authorization flaws
- Server-Side Request Forgery (SSRF)
- Remote Code Execution (RCE)
- SQL Injection (if database is added)
- Sensitive data exposure
- Security misconfigurations

## What NOT to Report

The following are generally NOT considered security issues:
- Lack of HTTPS (handled by hosting platform)
- Missing security headers (handled by hosting platform)
- Theoretical vulnerabilities without proof of concept
- Issues already reported
- Social engineering attacks

## Disclosure Policy

When we receive a security bug report, we will:

1. **Confirm the problem** and determine affected versions
2. **Audit code** to find any similar problems
3. **Prepare fixes** for all supported versions
4. **Release patches** as soon as possible
5. **Credit the reporter** (unless they wish to remain anonymous)

## Security Best Practices

### For Contributors

When contributing code:
- Never commit sensitive data (API keys, passwords, tokens)
- Use `.env` files for sensitive configuration (already in `.gitignore`)
- Sanitize all user inputs
- Validate data on both client and server side (when backend is added)
- Use HTTPS for all external API calls
- Keep dependencies up to date
- Follow the principle of least privilege

### For Deployment

When deploying:
- Always use HTTPS
- Enable security headers (CSP, HSTS, X-Frame-Options, etc.)
- Set appropriate CORS policies
- Use environment variables for configuration
- Enable DDoS protection
- Implement rate limiting (if backend is added)
- Regular security audits
- Keep hosting platform updated

## Security Updates

We will notify users of security updates through:
- GitHub Security Advisories
- Release notes in CHANGELOG.md
- Email notifications (for critical vulnerabilities)

## Third-Party Dependencies

We regularly monitor and update third-party dependencies for security vulnerabilities using:
- GitHub Dependabot
- npm audit
- Snyk (optional)

## Contact

For security concerns, please contact:
- **Email**: security@lawnflow.ai
- **Response Time**: Within 48 hours
- **Updates**: Within 5 business days

## Attribution

This security policy is based on industry best practices and recommendations from:
- OWASP (Open Web Application Security Project)
- GitHub Security Best Practices
- Node.js Security Working Group

---

**Thank you for helping keep LawnFlow.ai and our users safe!**
