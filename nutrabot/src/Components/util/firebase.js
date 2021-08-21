import firebase from "firebase/app";
import "firebase/database";

const firebaseKey = process.env.REACT_APP_FIREBASE_KEY

  const firebaseConfig = {
    apiKey: firebaseKey,
    authDomain: "nutribot-trial.firebaseapp.com",
    projectId: "nutribot-trial",
    storageBucket: "nutribot-trial.appspot.com",
    messagingSenderId: "485846093084",
    appId: "1:485846093084:web:4136d4e84a35811a36fed9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;