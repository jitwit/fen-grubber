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
    if (a>0) {
	var b = txt.substring(a).search('\n');
	var fen = txt.substring(a+FEN_CT.length,a+b);
	window.open(analysis_board_url(fen), '_blank');
   } else {
	alert('no fen to copy');
    }
}

function extract_fen () {
    var where = window.location;
    var path = where.pathname.split('/');
    if (where.host === 'chesstempo.com') {
	chesstempo_fen();
    } else {
	alert('idk how to get a fen from ',where);
    }
}

extract_fen();
