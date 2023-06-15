console.log("UWUWUWUWUW");

var o = new MutationObserver(
  (ms) => {
    for (var m of ms) {
      for (n of m.addedNodes) {
	var c = n.className;
	if (c && c.includes("board-modal-container-container")) {
	  var r = n.querySelector(".header-title-component");
	  if (r.textContent === "You Won!") {
	    r.textContent = "INDEED INDEED";
	  } else {
	    r.textContent = "ALAS ALAS";
	  }
	}
      }
    }
  }
);

o.observe(document.documentElement, { childList: true, subtree: true });
