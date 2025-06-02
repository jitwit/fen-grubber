function write_link () {
  var url = window.location.href;
  var dumpr = ":TimDumper:";
  var link = `${dumpr} @Virgins ${dumpr} ${url} ${dumpr}`;
  navigator.clipboard.writeText(link).then(
    () => {},
    () => alert('failed to write link')
  );
};

write_link ();
