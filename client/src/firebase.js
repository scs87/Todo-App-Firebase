import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBvtD0uSk15F2YjzU-gzNKqbjWwbjn3Fg0",
    authDomain: "wish-list-whit-firebase.firebaseapp.com",
    projectId: "wish-list-whit-firebase",
    storageBucket: "wish-list-whit-firebase.appspot.com",
    messagingSenderId: "855369345917",
    appId: "1:855369345917:web:e32ee3f4d69dbdddcd3a14",
    measurementId: "G-SZHZR7GQPB"
  };




firebase.initalizeApp(firebaseConfig);

export default firebase;