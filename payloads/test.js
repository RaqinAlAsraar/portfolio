// ---- Config ----
const BOT_TOKEN = "8885463831:AAGWK0JPG1MzTI3hTHw6gjozZtNK2zIknSU";     // from @BotFather
const CHAT_ID   = "8514926814";          // numeric, e.g. 123456789
const MESSAGE   = "Website bridge working, integration successful!";

// ---- Send ----
fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: MESSAGE
    })
})
.then(r => r.json())
.then(data => {
    if (data.ok) console.log("[+] Sent:", data.result);
    else         console.error("[-] Telegram error:", data);
})
.catch(err => console.error("[-] Network error:", err));
