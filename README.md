# 🌐 Page Chat Assistant

**Page Chat Assistant** is a Chrome extension that enables users to load the content of any webpage and chat about it directly in a sidebar. Using AI-driven responses, it provides contextual answers based on the page's content, allowing for an interactive and informative browsing experience.

## ✨ Features

- 💬 **Contextual Chat**: Ask questions about the webpage content, and receive short, relevant answers based on the context of the page.
- 🔹 **Easy Accessibility**: Open the chat sidebar from the extension icon on the Chrome toolbar.
- ⚡ **Instant Response**: Integrated with the Gemini API, the bot provides fast, concise responses, ensuring an efficient user experience.

## 🚀 Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/page-chat-assistant.git
   ```
2. Open **Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click **Load unpacked** and select the folder where you cloned this repository.
5. The extension should now appear in your list of installed extensions. 🎉

## 📖 Usage

1. Click on the **Page Chat Assistant** icon in the Chrome toolbar to open the sidebar.
2. Enter a question or greeting in the input box at the bottom of the sidebar.
3. Click **Send** to start the conversation. The assistant will analyze the current page content and provide a response based on the context.

## 📂 Files Overview

### `manifest.json` 🗂️

Defines the Chrome extension's metadata and permissions. Key sections include:

- 🔑 `permissions`: Allows the extension to access active tabs, scripting, and storage.
- 📌 `action`: Defines the default popup (`popup.html`) and icon.
- ⚙️ `content_scripts`: Runs `contentScript.js` on every page to capture the page content.

### `popup.js` 💻

Handles user interactions and communication with the Gemini API:

- 📝 Captures the user’s question and fetches the current webpage content.
- 🌐 Makes a request to the Gemini API, including the user question and page content as context.
- 💬 Displays responses within the chat interface and handles loading indicators.

### `contentScript.js` 📄

Extracts the textual content of the current webpage and sends it back to `popup.js` when requested.

### `popup.html` 🌐

Provides the HTML structure for the chat sidebar:

- 💬 Includes an input box for user queries and a chat display area.
- 🔄 Shows a loading indicator while awaiting responses from the API.

### `styles.css` 🎨

Contains styles for the chat interface, including layout, chat bubble styling, and loading indicator animations.

## 🔑 API Configuration

This extension uses the **Gemini API** for generating content. In `popup.js`, replace the placeholder API key with your actual Gemini API key:

```javascript
const apiKey = 'YOUR_ACTUAL_API_KEY';
```

Ensure your API key has the correct permissions to interact with the Gemini endpoint.

## 🛠️ Permissions

The extension requires the following permissions:

- **activeTab**: Accesses the currently active tab to capture the page content.
- **scripting**: Runs JavaScript code within the context of web pages.
- **storage**: Allows saving user preferences and settings.

These permissions are essential for loading, reading, and interacting with webpage content.

## ❓ Troubleshooting

- ⚠️ **API Errors**: Ensure your API key is valid and has the necessary permissions for the Gemini API.
- 📄 **Empty Responses**: If no content appears in the chat, ensure the page contains accessible text content.
- 🔒 **Permission Issues**: Verify that the extension has been granted all required permissions in `chrome://extensions`.

## 🤝 Contributing

Feel free to fork this project, submit pull requests, or open issues to contribute improvements.
