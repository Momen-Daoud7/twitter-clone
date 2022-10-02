import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkumgTwIv3-kAiQzYdm6zcuWjTsyM-Z_k",
  authDomain: "twitter-clone-b88d7.firebaseapp.com",
  projectId: "twitter-clone-b88d7",
  storageBucket: "twitter-clone-b88d7.appspot.com",
  messagingSenderId: "981777083252",
  appId: "1:981777083252:web:180f05639b1db2a23a5a21",
  measurementId: "G-FZZ5YNTDLN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
