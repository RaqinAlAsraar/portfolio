# Stored Cross-Site Scripting (XSS) via Markdown `javascript:` Links in `axeloz/filesharing`

- **Project:** `axeloz/filesharing`
- **Affected Versions:** `< 2.14.3` (verified at commit `e865be1`)
- **Patched Version:** `2.14.3`
- **Vulnerability Type:** Stored Cross-Site Scripting (CWE-79)
- **CVSS 3.1 Vector:** `CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N` (Medium)
- **Discoverer:** Raqin Al-Asraar

## Summary

`axeloz/filesharing` versions prior to `2.14.3` are vulnerable to Stored Cross-Site Scripting (XSS) in the bundle description field. While HTML tags are stripped when a bundle is saved, Markdown links using the `javascript:` pseudo-protocol are converted into clickable anchor tags during rendering and injected into the DOM via Alpine.js `x-html`. Any user who visits a shared bundle preview link and clicks the rendered link executes arbitrary JavaScript in the application's origin.

## Root Cause

1. **Input Sanitization (`app/Models/Bundle.php`):** On save, `stripTags()` removes raw HTML tags from the bundle description, leaving Markdown syntax untouched.
2. **Markdown Rendering (`app/Http/Resources/BundleResource.php` & `BundleResourceFiltered.php`):** `Str::markdown()` is called with default options where `allow_unsafe_links` defaults to `true`, converting `[label](javascript:...)` into `<a href="javascript:...">`.
3. **DOM Sink (`resources/views/download.blade.php`):** The rendered HTML is inserted directly via `x-html="metadata.description_html"` on the bundle preview/download page (`/bundle/<slug>/preview?auth=<preview_token>`), which is accessible to anyone with the link.

## Proof of Concept

1. Log in to the application (or enable `ANONYMOUS_UPLOAD_ALLOWED=true` for unauthenticated exploitation).
2. Create a new upload bundle and set the description to:
   ```markdown
   [open me](javascript:alert("Stored_XSS_Found_By_Raqin_Al-Asraar"))
