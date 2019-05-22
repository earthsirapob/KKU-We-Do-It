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
    window.alert("Login Successfully!")
    window.location="redirect.html";
    document.getElementById("user").style.display = "block";
    document.getElementById("login").style.display = "none";

    var users = firebase.auth().currentUser;
    var email_id = users.email;
    document.getElementById("user_para").innerHTML = "Welcome " + email_id;
    setTimeout(function() {
      window.location="main.html"
    }, 3000)

  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
});

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.alert("Log out Successfully!");
    window.location="index.html";
  }).catch(function(error) {

  });
}

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error : " + errorMessage);
  });
  // modal.style.display = "none";
  
  
}