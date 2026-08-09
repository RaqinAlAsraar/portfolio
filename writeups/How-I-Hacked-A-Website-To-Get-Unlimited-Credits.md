**In the name of Allah, the most Gracious, the most Merciful.**

> *This is my first write-up, so I apologize if you find it boring.*

---

## The Backstory

After receiving numerous NAs (Not Applicable) and duplicates from public programs, I decided to shift my focus toward self-hosted programs. I started dorking, searching through GitHub lists, and exploring various targets until I stumbled upon a self-hosted VDP (Vulnerability Disclosure Program). It was an Indian online shop with no monetary rewards — but that didn't matter to me. My goal at this stage was to build mindset and confidence, not to chase payouts.

I carefully read through their rules and scope. My objective during this hunting phase was clear: **be a manual hunter, not a script kiddie**. I wanted to focus on logic flaws, manual bugs, and creative attack vectors.

---

## Day 1 — Reconnaissance

I began by surfing the website as a normal user would. I noted down every component that seemed important for later testing. I downloaded JavaScript files, analyzed Burp Suite requests, and tried to predict what kind of sensitive information I could potentially uncover.

---

## Day 2 — Mapping the Attack Surface

After completing my initial reconnaissance, I listed down the vulnerabilities I'm proficient in. I tried them all... but **nothing worked** :(

Self-doubt began creeping in, but this was exactly what I wanted to fight against. So, I revisited the component and technology list I had prepared for the target. I used Claude to understand every possible bug class that could apply to the tech stack. By the end of the day, I had a long syllabus of new techniques to learn and practice.

---

## Day 3 — JWT & Logic Flaws

I learned JWT (JSON Web Tokens) and tested various bypass techniques I had gathered from other write-ups. However, the JWT implementation was well-secured. I then shifted my focus to logic flaws. After hunting for 7 hours straight, exhaustion kicked in. I closed my laptop and took a break.

> **Lesson learned:** When you feel broken, take breaks instead of stepping back.

---

## Day 4 — Deep Dive into JavaScript

I resumed surfing the website and started reading JavaScript files — both manually and with AI assistance. I found some misconfigurations, but they weren't significant enough to report. However, my failure experience taught me valuable lessons about where to dig deeper and where to stop.

---

## Day 5 — The Breakthrough

This was the day I learned about **race condition vulnerabilities**. I started applying this technique to the target website. Initially, nothing seemed promising — until I noticed the **"Refer & Earn"** page.

### The Vulnerability

Here's how the feature worked:

> When you invite someone using your referral code, both you and the invitee receive **₹200 credits** that can be used on the website.

It was **2:13 AM**. With a tired but determined mindset, I:

1. Created another account
2. Intercepted the referral request with Burp Suite
3. Prepared multiple group tabs for a race condition attack
4. Hit the send button

I received a `200 OK` response. Curious, I checked the website in my browser...

**My jaw dropped.** I had received **triple the expected credits** — ₹600 instead of ₹200.

By increasing the number of concurrent requests, both accounts could receive unlimited credits instead of just ₹200. This was a valid and impactful finding.

### Reporting

I prepared a detailed report, submitted it, and began waiting for a response. Time felt like it had slowed down to a crawl.

After **7 days**, I received an email confirming that the vulnerability was valid. As a reward, they offered me an **Amazon voucher worth ₹10,000** after patching the bug.

---

## Key Takeaways

This journey taught me far more than just a bug bounty:

- **Learning > Money:** I learned about multiple vulnerabilities I had no prior knowledge of.
- **Patience & Persistence:** I practiced patience, critical thinking, and self-belief.
- **Confidence:** I proved to myself that I *can* do this and built a true hacker's mindset.
- **Approach:** I developed a methodology for manual hunting that I can now apply elsewhere.

**That was my real victory.**

This bug wasn't found in just 5 days — it was the culmination of **5 months of failures**. Sometimes victory is visible, sometimes it isn't. I don't consider failures that lead to success as actual failures.

So don't stop. Keep moving. Your potential shouldn't be measured by money, but by how many times you stand up after falling down.

---

> *As for me, this isn't success — it's just a checkpoint. The journey continues, and it's far from over.*

---

## Screenshots

> ![Screenshot here](https://raw.githubusercontent.com/RaqinAlAsraar/portfolio/refs/heads/main/images/IMG_20260809_041247.jpg)

---

**— Rαqιη Αλ-Αѕʀααʀ**  
*Cybersecurity Researcher*
