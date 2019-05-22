// Initialize Firebase
var config = {
  apiKey: "AIzaSyAi8g9C3hOwPtQb8qjs8ussVEPZWa-_vQI",
  authDomain: "testlogin-dceb2.firebaseapp.com",
  databaseURL: "https://testlogin-dceb2.firebaseio.com",
  projectId: "testlogin-dceb2",
  storageBucket: "testlogin-dceb2.appspot.com",
  messagingSenderId: "605422382642"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

  } else {
    window.location="index.html";
  }
});

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.alert("Logout Successfully!");
    window.location="index.html";
  }).catch(function(error) {

  });
}