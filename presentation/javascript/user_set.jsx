firebase.database().ref('users/' + userId).set({
  username: name,
  email: email
});
