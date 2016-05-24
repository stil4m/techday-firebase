database.ref('counter').on('value', function(snapshot) {
  ...
});

database.ref('counter').once('value', function(snapshot) {
  ...
});
