function crossword_clue () {
  var clue = document.getElementsByClassName('selected')[1].innerText;
  clue = clue.substring(clue.search('\n') + 1);
  open('https://google.com/search?q=site:tryhardguides.com ' + clue);
}

if (window.location.host === "downforacross.com") { crossword_clue (); }
