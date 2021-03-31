import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBZDSwLl6MbWyK7o5Cp8ILzY5UXPaXKRzo",
  authDomain: "auth-studygroup.firebaseapp.com",
  projectId: "auth-studygroup",
  storageBucket: "auth-studygroup.appspot.com",
  messagingSenderId: "796173592199",
  appId: "1:796173592199:web:5a7fdeb0d3a1483d6dba22",
});

export const auth = app.auth();
export default app;
