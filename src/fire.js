import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDJuR6q4TROjaY-N1ZEc22cGLh2AubcBcU",
    authDomain: "scholarshipsa-z.firebaseapp.com",
    databaseURL: "https://scholarshipsa-z.firebaseio.com",
    projectId: "scholarshipsa-z",
    storageBucket: "scholarshipsa-z.appspot.com",
    messagingSenderId: "245999101443",
    appId: "1:245999101443:web:071b274c01ff9bb45e1036",
    measurementId: "G-XQDL2HS8J2"
  };

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
