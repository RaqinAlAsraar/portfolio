// Clear all objects on the website and create a new black screen
(function() {
    // Remove all elements from the body
    document.body.innerHTML = '';
    
    // Also clear the head (optional - removes styles/scripts)
    // Uncomment the next line if you want to remove all head elements too
    // document.head.innerHTML = '';
    
    // Style the body to be black and full screen
    document.body.style.cssText = `
        margin: 0;
        padding: 0;
        background-color: #000000;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        font-family: 'Arial', sans-serif;
    `;
    
    // Create container for image and text
    const container = document.createElement('div');
    container.style.cssText = `
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    `;
    
    // Create the image element
    // Replace the src with your actual image URL
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300x300/000000/ffffff?text=Image'; // <-- REPLACE THIS with your image URL
    image.alt = 'Raqin Al-Asraar';
    image.style.cssText = `
        max-width: 300px;
        max-height: 300px;
        width: auto;
        height: auto;
        display: block;
    `;
    
    // Create the text element
    const text = document.createElement('h1');
    text.textContent = 'Raqin Al-Asraar';
    text.style.cssText = `
        color: #ffffff;
        font-size: 3rem;
        font-weight: bold;
        margin: 0;
        padding: 0;
        text-align: center;
        letter-spacing: 2px;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    `;
    
    // Append elements
    container.appendChild(image);
    container.appendChild(text);
    document.body.appendChild(container);
    
    // Stop any ongoing animations/intervals on the page
    // (This attempts to clear common timers)
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
        window.clearInterval(id);
    }
})();
