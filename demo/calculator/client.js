//Firebase Setup
var config = {
    apiKey: "AIzaSyBGf_GD5vTC9TZcjRDUsQBR-2yAuQv004A",
    authDomain: "techday-elm.firebaseapp.com",
    databaseURL: "https://techday-elm.firebaseio.com",
    storageBucket: "",
};
var elmTechdayApp = firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
var queue = database.ref('calculator/queue');
var computed = database.ref('calculator/computed');

// Get refs to all the elements
var left = document.getElementById("left")
var right = document.getElementById("right");
var term = document.getElementById("term");
var form = document.getElementById("calculator");
var resultList = document.getElementById("result-list");

form.onsubmit = function(e) {
    e.preventDefault();
    var data = {};
    data.left = isNaN(parseFloat(left.value)) ? 0 : parseFloat(left.value);
    data.term = term.value;
    data.right = isNaN(parseFloat(right.value)) ? 0 : parseFloat(right.value);

    term.value = "+";
    right.value = null;
    left.value = null;

    queue.push(data);
}

computed.limitToLast(3).on('child_added', function(item) {
    addResult(item.val());
})

function addResult(computation) {
    var sum = computation.sum;
    var output = sum.left + " " + sum.term + " " + sum.right + " = " + computation.result;

    var li = document.createElement("li");
    li.textContent = output;
    resultList.appendChild(li);
}
