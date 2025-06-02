chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['fen.js']
  });
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "crossword-link-command") {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['crossword-link.js']
    });
  }
});
