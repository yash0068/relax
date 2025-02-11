document.getElementById('relaxButton').addEventListener('click', function() {
    const messages = [
        "You are amazing just the way you are.",
        "Take a deep breath, everything will be okay.",
        "You are stronger than you think.",
        "This moment will pass, just like a cloud in the sky.",
        "You deserve all the happiness in the world.",
        "Relax.",
        "You are loved more than you know."
        
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById('relaxMessage');
    messageElement.textContent = randomMessage;
    messageElement.classList.remove('hidden');
});