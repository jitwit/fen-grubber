function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function import_to_lichess (pgn) {
  try {
    var response = await fetch("https://lichess.org/api/import", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: `pgn=${encodeURIComponent(pgn)}`
    });
    if (!response.ok) { throw new Error(`monacoS: ${response.status}`); }
    var result = await response.json();
    open(result.url);
  } catch (error) {
    console.error("Error importing PGN:", error);
    throw error;
  }
}

async function analyse_freely () {
  document.getElementsByClassName("share")[0].click(); await sleep(500);
  document.getElementById("tab-pgn").click(); await sleep(500);
  document.getElementsByClassName("share-menu-tab-pgn-copy")[0].click();
  var pgn = await navigator.clipboard.readText();
  import_to_lichess (pgn);
}

if (window.location.host === "chess.com" &&
    window.location.href.includes("game")) {
  analyse_freely().catch(e => console.log(e));
}
