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

function lichess_game_fen () {
    var fenpgn = document.getElementsByClassName('fen-pgn');
    var fen = fenpgn[0].children[0].children[1].value;
    yank_fen (fen);
}

function lichess_broadcast_fen () {
    var downloads = document.getElementsByClassName('form3')[0];
    var fen = downloads.children[4].children[1].value;
    yank_fen (fen);
}

function lichess_analysis_fen () {
    var node = document.getElementsByClassName('analyse__underboard__fen');
    var fen = node[0].value;
    yank_fen (fen);
}

function extract_fen () {
    var where = window.location;
    var path = where.pathname.split('/');
    if (where.host === 'chesstempo.com') {
	chesstempo_fen();
    } else if (where.host === 'lichess.org') {
	if (path[1] === 'broadcast') {
	    lichess_broadcast_fen ();
	} else if (path[1] === 'analysis') {
	    lichess_analysis_fen ();
	} else {
	    lichess_game_fen ();
	}
    } else {
	alert('idk how to get a fen from ',where);
    }
}

extract_fen();
