var o = new MutationObserver(
  (ms) => {
    for (var m of ms) {
      for (n of m.addedNodes) {
	var c = n.className;
	if (typeof c === "string" && c.includes("board-modal-container-container")) {
	  var r = n.querySelector(".header-title-component");
	  if (r.textContent === "You Won!") {
	    r.textContent = "INDEED INDEED";
	  } else if (r.textContent === "Draw") {
	    r.textContent = "INDEED ALAS";
	  } else {
	    r.textContent = "ALAS ALAS";
	  }
	}
      }
    }
  }
);

o.observe(document.documentElement, { childList: true, subtree: true });
