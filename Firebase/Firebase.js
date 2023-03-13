// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdVoUs55oDR0IcgjqhNiDQkgY-sMHEJdo",

  authDomain: "lets-talk-e0d18.firebaseapp.com",

  projectId: "lets-talk-e0d18",

  storageBucket: "lets-talk-e0d18.appspot.com",

  messagingSenderId: "296956508711",

  appId: "1:296956508711:web:d473dd342ad5a8153e6c02",

  measurementId: "G-Y26PNTWPCD"

};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
