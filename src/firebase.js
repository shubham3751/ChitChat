// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"; 


  var firebaseConfig = {
    apiKey: "AIzaSyA1P7PyHRRobOhg5XYls-xL5z3QTtL6kkw",
    authDomain: "chitchat-f9115.firebaseapp.com",
    projectId: "chitchat-f9115",
    storageBucket: "chitchat-f9115.appspot.com",
    messagingSenderId: "959264228960",
    appId: "1:959264228960:web:0d575b9f15791319982505",
    measurementId: "G-5HE8YNBZ00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;


  // basically helps to connect to database 
  