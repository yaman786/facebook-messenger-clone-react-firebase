import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVwPGNfxq5acy3vNqBG9hc3IzyhXjPXNY",
  authDomain: "facebook-messenger-clone-20a66.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-20a66.firebaseio.com",
  projectId: "facebook-messenger-clone-20a66",
  storageBucket: "facebook-messenger-clone-20a66.appspot.com",
  messagingSenderId: "806364771342",
  appId: "1:806364771342:web:77b5eab9e7d9457431385f",
  measurementId: "G-WHFX6C60TQ"
}); 
    
const db  = firebaseApp.firestore();

export default db;