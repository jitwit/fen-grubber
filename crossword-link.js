// convenient way to alert collaborators for crosswords

function write_link () {
  var td = ":TimDumper:"; var url = window.location.href;
  var link = `${td} ${url} ${td} @Virgins ${td}`;
  navigator.clipboard.writeText(link).then(
    () => {},
    () => alert('failed to write link')
  );
};

if (window.location.host === "www.crosswithfriends.com") { write_link (); }
