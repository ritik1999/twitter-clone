import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVrcKrJUUfnTgTbg5kli4CZYJF2dGGtz8",
    authDomain: "twitter-clone-34ec9.firebaseapp.com",
    databaseURL: "https://twitter-clone-34ec9.firebaseio.com",
    projectId: "twitter-clone-34ec9",
    storageBucket: "twitter-clone-34ec9.appspot.com",
    messagingSenderId: "627531871641",
    appId: "1:627531871641:web:7abf00476870af59d28f08",
    measurementId: "G-EDWWM3L6CX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;