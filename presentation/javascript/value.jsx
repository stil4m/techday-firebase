database.ref('counter').on('value', function(snapshot) {
  //Extract the value from the snapshot
  var current = snapshot.val();

  badge.innerHTML = current;
});
