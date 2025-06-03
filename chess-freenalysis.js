// #share-modal > div > div.cc-modal-body.cc-modal-sm > div > section > div > div:nth-child(2) > div.share-menu-tab-pgn-pgn-wrapper
// ..... div class share-menu-pgn-pgn-wrapper
function analyse_freely () {
  document.getElementsByClassName("share")[0].click();
  document.getElementById("tab-pgn").click();
  document.getElementsByClassName("share-menu-tab-pgn-copy")[0].click();
}

analyse_freely ();
