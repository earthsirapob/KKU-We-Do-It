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
        var users = firebase.auth().currentUser;
        var email_id = users.email;
        users.displayName;
        document.getElementById("user_para").innerHTML = "Welcome " + email_id;
        setTimeout(function() {
            window.location="main.html"
        }, 3000)
    } else {
        window.location="main.html";
    }
});