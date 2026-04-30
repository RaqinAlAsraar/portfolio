# Chaining XSS to Account Takeover
*Date: Oct 24, 2024* *Author: Raqin Al-Asraar*
## Introduction
During a recent black-box test on a private bug bounty program, I uncovered a Reflected Cross-Site Scripting (XSS) vulnerability. On its own, XSS is great, but maximizing impact is the real goal.
## The Discovery
The target application had a search function that reflected user input directly into a tag without proper sanitization.
The initial payload was simple:
```javascript
"-alert(document.domain)-"

```
This successfully popped an alert box. However, the application used HttpOnly flags on session cookies, meaning document.cookie was useless.
## The Escalation
Since I couldn't steal the cookie, I analyzed the application's API endpoints. I noticed that the "Update Email" endpoint did not require a password confirmation or a CSRF token. It relied entirely on the active session.
I crafted a malicious JavaScript payload to send a silent POST request to this endpoint using the victim's session context:
```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/v1/user/update-email", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.withCredentials = true; 
xhr.send(JSON.stringify({"email": "attacker@controlled-domain.com"}));

```
## Impact
By tricking an authenticated user into clicking the malicious link, the script silently executed, changing their account email to one I controlled. From there, I simply triggered a password reset to the new email, achieving a full **Account Takeover (ATO)**.
### Remediation
I recommended the following fixes to the client:
 1. Implement context-aware output encoding.
 2. Require password re-verification for sensitive actions (like changing emails).
 3. Implement Anti-CSRF tokens across all state-changing endpoints.
