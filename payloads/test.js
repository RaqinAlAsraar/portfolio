// ---- Config (paste NEW token after revoking the leaked one) ----
const BOT_TOKEN = "8369821788:AAHW7vi8nU1SfAPxEBQGMW722Ygy3-MliT8";
const CHAT_ID   = "-1004334353940";
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
    if (data.ok) {
        console.log("[+] Sent. Message ID:", data.result.message_id);
        console.log("[+] To:", data.result.chat.first_name, "(id", data.result.chat.id + ")");
    } else {
        console.error("[-] Telegram error:", data.error_code, data.description);
    }
})
.catch(err => console.error("[-] Network error:", err));
