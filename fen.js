// extract chesstempo fens

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

function extract_fen () {
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

if (window.location.host === "chesstempo.com") { extract_fen (); }
