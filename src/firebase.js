import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzgzrmEzpUoGbe1UDO7SCPiZi8x2Na06c",
    authDomain: "clone-27a9a.firebaseapp.com",
    projectId: "clone-27a9a",
    storageBucket: "clone-27a9a.appspot.com",
    messagingSenderId: "971252335687",
    appId: "1:971252335687:web:e6b6d9ca62424276819d62",
    measurementId: "G-YSGN7HRZPH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };