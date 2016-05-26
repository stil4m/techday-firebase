//Firebase Setup
var config = {
  apiKey: "AIzaSyBGf_GD5vTC9TZcjRDUsQBR-2yAuQv004A",
  authDomain: "techday-elm.firebaseapp.com",
  databaseURL: "https://techday-elm.firebaseio.com",
  storageBucket: "",
};
var elmTechdayApp = firebase.initializeApp(config);


// Get the references to the database services
var database = firebase.database();
var queue = database.ref('calculator/queue');
var computed = database.ref('calculator/computed');


queue.on('child_added', function(next) {
  var sum = next.val();
  var result = compute(sum);
  console.log("Sum: " + JSON.stringify(sum));
  console.log("Result: " + result);
  computed.push({
    sum: sum,
    result: result
  });
  next.ref.remove();
});

function compute(sum) {
  switch (sum.term) {
    case '+':
      return sum.left + sum.right;
    case '-':
      return sum.left - sum.right;
    case 'x':
      return sum.left * sum.right;
    case '/':
      return sum.left / sum.right;
    default:
      return "...";
  }
}
