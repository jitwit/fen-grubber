// this "script" runs when the extension icon is clicked
var FEN_START = 'FEN: ';

function extract_fen () {
    var txt = document.body.innerText;
    var a = txt.search(FEN_START);
    if (a>0) {
	var b = txt.substring(a).search('\n');
	var fen = txt.substring(a+FEN_START.length,a+b);
	navigator.clipboard.writeText(fen).then(
	    () => {},
	    () => alert('failed to copy fen')
	);
   } else {
	alert('no fen to copy');
    }
}

extract_fen();
