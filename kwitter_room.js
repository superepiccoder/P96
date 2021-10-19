
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0QZljhALVcRbf1hHUcNO-CUQIAxyVufQ",
      authDomain: "kwitter-22371.firebaseapp.com",
      projectId: "kwitter-22371",
      databaseURL: "https://kwitter-22371-default-rtdb.firebaseio.com",
      storageBucket: "kwitter-22371.appspot.com",
      messagingSenderId: "641637932854",
      appId: "1:641637932854:web:816e5a6879dea4b1621d97"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom() { room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
     localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room-Name " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

       
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }

function logout() 
{
   localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}

