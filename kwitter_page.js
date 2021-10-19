//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA0QZljhALVcRbf1hHUcNO-CUQIAxyVufQ",
      authDomain: "kwitter-22371.firebaseapp.com",
      databaseURL: "https://kwitter-22371-default-rtdb.firebaseio.com",
      projectId: "kwitter-22371",
      storageBucket: "kwitter-22371.appspot.com",
      messagingSenderId: "641637932854",
      appId: "1:641637932854:web:816e5a6879dea4b1621d97"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg = doucment.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}