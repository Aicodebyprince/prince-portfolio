# Security Policy

## Supported Versions

This project is currently secured and runs on Next.js `15.3.x`.

## Next.js Security Upgrades

Due to past vulnerabilities (such as the react2shell issue), the `next` dependency in `package.json` **must be pinned to an exact, verified version**.

**Current Pinned Version:** `15.3.8`

### Upgrade Instructions

1. **Do not use caret (`^`) or tilde (`~`) ranges** for the `next` package version in `package.json`.
2. When upgrading Next.js, always confirm the version is a **patched, non-vulnerable release** for that specific major/minor line.
3. Update `package.json` to the exact version string (e.g., `"next": "15.3.8"`).
4. Run `npm install` to update `package-lock.json`.
5. **Always commit the updated `package-lock.json`** to ensure deployment environments use the exact tested version.

To verify Next.js vulnerabilities, reference the official Next.js security advisories before applying upgrades.
