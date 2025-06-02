function write_link () {
  var td = ":TimDumper:";
  var link = `${td} @Virgins ${td} ${window.location.href} ${td}`;
  navigator.clipboard.writeText(link).then(
    () => {},
    () => alert('failed to write link')
  );
};

write_link ();
