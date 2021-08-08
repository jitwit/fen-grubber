// this "script" runs when the extension icon is clicked
var FEN = 'FEN: ';

function extract_fen () {
    var txt = document.body.innerText;
    var a = txt.search(FEN);
    if (a>0) {
	var b = txt.substring(a).search('\n');
	var fen = txt.substring(a+FEN.length,a+b);
	navigator.clipboard.writeText(fen).then(
	    () => {},
	    () => alert('failed to copy fen')
	);
   } else {
	alert('no fen to copy');
    }
}

extract_fen();
