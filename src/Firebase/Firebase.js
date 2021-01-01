import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCJxoKh9ERZfH-ndimuijlT4WkZrsNwFdA",
    authDomain: "clone-20.firebaseapp.com",
    databaseURL: "https://clone-20.firebaseio.com",
    projectId: "clone-20",
    storageBucket: "clone-20.appspot.com",
    messagingSenderId: "772309636685",
    appId: "1:772309636685:web:f1bcf8f2df367a44a12e04",
    measurementId: "G-L8WQ7ESP6X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };