var updates = {};
var postData = {...};

updates['/posts/' + newPostKey] = postData;
updates['/user-posts/' + uid + '/' + newPostKey] = postData;

return firebase.database().ref().update(updates);
