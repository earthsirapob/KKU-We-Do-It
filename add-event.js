var title = document.getElementById("title").value;
var desc = document.getElementById("desc").value;
var date_st = document.getElementById("date_st");
var date_end = document.getElementById("date_end");
var time_st = document.getElementById("time_st");
var time_end = document.getElementById("time_end");
var place = document.getElementById("place").value;
var img_url = document.getElementById("img_url").value;
var allDate = document.getElementsByClassName("time").value;
var typeTitle = document.getElementById("typeselect");

function addActivity() {
    var x = "[ "+typeTitle.value+" ]";
    var title = document.getElementById("title").value;
  
    var desc = document.getElementById("desc").value;
    var date_st = document.getElementById("date_st").value;
    var date_end = document.getElementById("date_end").value;
    var time_st = document.getElementById("time_st").value;
    var time_end = document.getElementById("time_end").value;
    var place = document.getElementById("place").value;
    var img_url = document.getElementById("img_url").value;
    var firebaseRef = firebase.database().ref("activities");
    console.log(date_st);
    console.log(date_end);
    // firebaseRef.once('value').then(function(dataSnapshot) {
    //     console.log(dataSnapshot.val());
    // });
    var activitiesId = firebase.database().ref().child('posts').push().key;
    firebaseRef.child(activitiesId).child("ev_dateSt").set(date_st);
    firebaseRef.child(activitiesId).child("ev_dateEn").set(date_end);
    firebaseRef.child(activitiesId).child("ev_desc").set(desc);
    firebaseRef.child(activitiesId).child("ev_imgUrl").set(img_url);
    firebaseRef.child(activitiesId).child("ev_place").set(place);
    firebaseRef.child(activitiesId).child("ev_timeEn").set(time_end);
    firebaseRef.child(activitiesId).child("ev_timeSt").set(time_st);
    firebaseRef.child(activitiesId).child("ev_title").set(x+title);
    alert("Add event Successfully!");
    window.location="main.html"
}
console.log(title);

//
var today = new Date();

var DD = today.getDate();
var MM = today.getMonth()+1; 
var YYYY = today.getFullYear();
var hh = today.getHours();
var mm= today.getMinutes();

if(DD<10) {
    DD='0'+DD;
} 

if(MM<10) {
    MM='0'+MM;
}

if(hh<10) {
    hh='0'+hh;
}


var date = YYYY+'-'+MM+'-'+DD;
var time = hh + ":" + mm;
console.log("today : " + date);
console.log("time : " + time);

time_st.setAttribute("value", time);
time_end.setAttribute("value", time);
date_st.setAttribute("value", date);
date_end.setAttribute("value", date);

$(".date").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")


