// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndvsHCUEt6SN5Q7TdOQXhwCNpnVnyBXc",
  authDomain: "kwitter-672d1.firebaseapp.com",
  databaseURL: "https://kwitter-672d1-default-rtdb.firebaseio.com",
  projectId: "kwitter-672d1",
  storageBucket: "kwitter-672d1.appspot.com",
  messagingSenderId: "541702930626",
  appId: "1:541702930626:web:71fad1ee81ee8746643b5b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    }); 
}