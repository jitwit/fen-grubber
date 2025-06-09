function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

// for some reason second click doesn't work
async function crossword_check () {
  var check = "#root > div > div > div.react-flex-view > div.react-flex-view.flex-column > div > div.toolbar > div.toolbar--menu.check > div > button";
  var puzzle = "#root > div > div > div.react-flex-view > div.react-flex-view.flex-column > div > div.toolbar > div.toolbar--menu.check > div > div > div:nth-child(3) > span";
  document.querySelector(check).click();
  await sleep(300);
  document.querySelector(puzzle).click();
}

if (window.location.host === "downforacross.com") { crossword_check (); }
