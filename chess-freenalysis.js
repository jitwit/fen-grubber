function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function analyse_freely () {
  document.getElementsByClassName("share")[0].click();
  await sleep(1000);
  document.getElementById("tab-pgn").click();
  await sleep(1000);
  document.getElementsByClassName("share-menu-tab-pgn-copy")[0].click();
}

analyse_freely().catch(e => console.log(e));
