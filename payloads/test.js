// ---- Config ----
const BOT_TOKEN = "8369821788:AAHW7vi8nU1SfAPxEBQGMW722Ygy3-MliT8";     // from @BotFather
const CHAT_ID   = "4334353940";          // numeric, e.g. 123456789
const MESSAGE   = "Integration successful, we are ready to attack!";

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
