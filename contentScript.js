(() => {
    const pageText = document.body.innerText;
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === "getTextContent") {
        sendResponse({ text: pageText });
      }
    });
  })();
  