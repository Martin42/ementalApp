import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB60T_8eP_YJnOZIFGbhKtWYEdX8mnZn1w",
    authDomain: "emental2021.firebaseapp.com",
    projectId: "emental2021",
    storageBucket: "emental2021.appspot.com",
    messagingSenderId: "851746804725",
    appId: "1:851746804725:web:bfe29376809d8770ba86bc"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }


  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth};