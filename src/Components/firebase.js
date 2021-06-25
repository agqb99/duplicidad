import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAj_XxT1BF0ieStIjZe6tSCssYc9h-dEA4",
  authDomain: "agqb-blog.firebaseapp.com",
  projectId: "agqb-blog",
  storageBucket: "agqb-blog.appspot.com",
  messagingSenderId: "779806643639",
  appId: "1:779806643639:web:a30473262fe6cca8370432",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

export const auth = fb.auth();
export default fb;
