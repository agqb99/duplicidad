import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDXnUZeyXw4HA1eODBx0KWg6KyXLDw1C44",
  authDomain: "firestore-project-d978d.firebaseapp.com",
  projectId: "firestore-project-d978d",
  storageBucket: "firestore-project-d978d.appspot.com",
  messagingSenderId: "486665948826",
  appId: "1:486665948826:web:de2e9c15070258f6e25923",
  measurementId: "G-20TLNZXV62",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();