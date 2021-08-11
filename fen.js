// this "script" runs when the extension icon is clicked
var FEN_CT = 'FEN: ';

function yank_fen (fen) {
	navigator.clipboard.writeText(fen).then(
	    () => {},
	    () => alert('failed to copy fen')
	);
}

function chesstempo_fen () {
    var txt = document.body.innerText;
    var a = txt.search(FEN_CT);
    if (a>0) {
	var b = txt.substring(a).search('\n');
	var fen = txt.substring(a+FEN_CT.length,a+b);
	yank_fen (fen);
   } else {
	alert('no fen to copy');
    }
}

function lichess_fen () {
    var fenpgn = document.getElementsByClassName('fen-pgn');
    var fen = fenpgn[0].children[0].children[1].value;
    console.log(fen);
    yank_fen (fen);
}

function extract_fen () {
    var where = window.location.host;
    if (where === 'chesstempo.com') {
	chesstempo_fen();
    } else if (where === 'lichess.org') {
	lichess_fen ();
    } else {
	alert('idk how to get a fen from ',where);
    }
}

extract_fen();
