import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDeZPUhzxk4NW93BEISzgIR-1hQmhGsLFk",
    authDomain: "voting-app-87d2a.firebaseapp.com",
    projectId: "voting-app-87d2a",
    storageBucket: "voting-app-87d2a.appspot.com",
    messagingSenderId: "354066866345",
    appId: "1:354066866345:web:3f99f85d01b89dedfb89b8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();