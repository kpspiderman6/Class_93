//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCBmLwMaB1klqrcWe2pcwvrhAmGb8fhuFQ",
      authDomain: "kwitter-930c8.firebaseapp.com",
      databaseURL: "https://kwitter-930c8-default-rtdb.firebaseio.com",
      projectId: "kwitter-930c8",
      storageBucket: "kwitter-930c8.appspot.com",
      messagingSenderId: "823622710261",
      appId: "1:823622710261:web:2f74ed539bcc17c708a6bc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
Username1 = localStorage.getItem("Username");
Roomname = localStorage.getItem("ROOMNAME");
function Send_message(){
      mess = document.getElementById("output").value;
      firebase.database().ref(Roomname).push({ name : Username1,message:mess,like:0
       }); 
       document.getElementById("message_input").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();
