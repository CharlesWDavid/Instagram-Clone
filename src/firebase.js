import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvYy21lpNbWPG8Yp8Ut4NrU5DW-TqmDo4",
  authDomain: "instagram-clone-b3fb8.firebaseapp.com",
  databaseURL: "https://instagram-clone-b3fb8.firebaseio.com",
  projectId: "instagram-clone-b3fb8",
  storageBucket: "instagram-clone-b3fb8.appspot.com",
  messagingSenderId: "721032502627",
  appId: "1:721032502627:web:b0af9422c14e9626104756",
  measurementId: "G-0YSER11RGN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
