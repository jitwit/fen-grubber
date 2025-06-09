chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["fen.js"]
  });
});

chrome.commands.onCommand.addListener((command, tab) => {
  switch (command) {
  case "crossword-link-command":
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["crossword-link.js"]
    });
    break;
  case "crossword-check-command":
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["crossword-check.js"]
    });
    break;
  case "crossword-clue-command":
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["crossword-clue.js"]
    });
    break;
  case "chess-pgn-command":
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["chess-freenalysis.js"]
    });
    break;
  }
});
