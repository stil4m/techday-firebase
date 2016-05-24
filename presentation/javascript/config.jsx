var config = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'your-database-url',
  storageBucket: 'your-storage-bucket'
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
