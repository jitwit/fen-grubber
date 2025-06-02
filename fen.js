// this "script" runs when the extension icon is clicked
var FEN_CT = 'FEN: ';

function yank_fen (fen) {
  navigator.clipboard.writeText(fen).then(
    () => {},
    () => alert('failed to copy fen')
  );
}

function analysis_board_url (fen) {
  return 'https://lichess.org/analysis/standard/' + fen.replace(/\s/g , '_');
}

function chesstempo_fen () {
  var txt = document.body.innerText;
  var a = txt.search(FEN_CT);
  if (a > 0) {
    var b = txt.substring(a).search('\n');
    var fen = txt.substring(a + FEN_CT.length, a + b);
    open(analysis_board_url(fen));
  } else {
    alert('no fen to copy');
  }
}

function crossword_clue () {
  var clue = document.getElementsByClassName('selected')[1].innerText;
  clue = clue.substring(clue.search('\n') + 1);
  open('https://google.com/search?q=site:tryhardguides.com ' + clue);
}

// <div id="board-layout-main" class="board-layout-main">
// <div class="piece bn square-36" style=""></div>

function extract_fen () {
  var where = window.location;
  var path = where.pathname.split('/');
  switch (where.host) {
  case 'chesstempo.com':
    chesstempo_fen(); break;
  case 'downforacross.com':
    crossword_clue(); break;
  default:
    alert('idk how to get a fen from ', where);
  }
}

extract_fen();
