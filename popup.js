document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value.trim();
  if (!userInput) return;
  
  // Append user message and show loading indicator
  appendMessage(userInput, "user");
  toggleLoadingIndicator(true);
  
  // Fetch page content and use it in the Gemini API request
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "getTextContent" }, (response) => {
      const pageText = response.text;
      generateContent(userInput, pageText);
    });
  });
});

// Function to call Gemini API
async function generateContent(userInput, pageText) {
  const apiKey = '<YOUR_API_KEY>';  // Replace with your actual API key

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
  const data = {
    contents: [
      {
        parts: [
          { text: `Give the answer of the following question in 2-3 lines based on the context provided. If you see question just contain the greeting or maybe not question about the article, then have the conversation like you normally do without having the context. Here is the Question: ${userInput} based on this here is the context: ${pageText}` }
        ]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    const botResponse = result["candidates"][0]["content"]["parts"][0]["text"];
    appendMessage(botResponse, "bot");
  } catch (error) {
    appendMessage("Error: " + error.message, "bot");
  } finally {
    toggleLoadingIndicator(false);
  }
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function toggleLoadingIndicator(isVisible) {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.classList.toggle("hidden", !isVisible);
}
