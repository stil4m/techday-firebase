var tweet = { text : "Hello world!"};
firebase.database().ref('tweets').push(tweet);
