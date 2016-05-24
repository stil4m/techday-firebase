//Firebase Setup
var config = {
  apiKey: "AIzaSyBGf_GD5vTC9TZcjRDUsQBR-2yAuQv004A",
  authDomain: "techday-elm.firebaseapp.com",
  databaseURL: "https://techday-elm.firebaseio.com",
  storageBucket: "",
};
var elmTechdayApp = firebase.initializeApp(config);

// Get refs to all the elements
var badge = document.getElementById("counter-value")
var up = document.getElementById("up");
var down = document.getElementById("down");


elmTechdayApp.auth().signInWithEmailAndPassword(window.email, window.password).then(function(user) {
  var userId = user.uid;

  // Get a reference to the database service
  var database = firebase.database();
  var counter = database.ref('user-counters/' + userId);
  // var counter = database.ref('user-counters/mh32jYf9LhcyecDVihCccbU4QI43');

  // value, childe_added,child_changed,child_removed
  var current;
  counter.on('value', function(snapshot) {
    current = snapshot.val();
    down.removeAttribute("aria-disabled");
    up.removeAttribute("aria-disabled");
    badge.innerHTML = current;
  });


  down.onclick = function() {
    counter.set(current - 1);
  }

  up.onclick = function() {
    counter.set(current + 1);
  }
}).catch(function() {
  //Handle Errors here...
})
