function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (userInput.value.trim() === "") {
        return;
    }

    // User message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    const message = userInput.value;
    userInput.value = "";

    // Bot response (simple echo for demonstration)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = "Bot: " + message;
        chatBox.appendChild(botMessage);

        // Scroll to the bottom of chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
