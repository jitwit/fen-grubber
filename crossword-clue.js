// take currently selected crossword clue and search in new tab

// search might return last example of? had small issue with: Law & Order actor ___ de la Garza
function crossword_clue () {
  var clue = document.getElementsByClassName('selected')[1].innerText;
  clue = clue.substring(clue.search('\n') + 1);
  open('https://google.com/search?q=site:tryhardguides.com ' + clue);
}

if (window.location.host === "downforacross.com") { crossword_clue (); }
