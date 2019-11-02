import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDD6jI2YETz75JuPEc5WcDR_tppv4EeOh0",
  authDomain: "crwn-db-8a0f0.firebaseapp.com",
  databaseURL: "https://crwn-db-8a0f0.firebaseio.com",
  projectId: "crwn-db-8a0f0",
  storageBucket: "crwn-db-8a0f0.appspot.com",
  messagingSenderId: "432539231372",
  appId: "1:432539231372:web:698068d674b96dd46ac7a9",
  measurementId: "G-VHC3VR11FZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
