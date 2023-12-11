// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAV_vurT9zg_px3h0n3NmdX6etdWONT8Rs",
  authDomain: "notes-app-715b9.firebaseapp.com",
  projectId: "notes-app-715b9",
  storageBucket: "notes-app-715b9.appspot.com",
  messagingSenderId: "304291526402",
  appId: "1:304291526402:web:44cca1cdcf818c7b53741b",
  measurementId: "G-Q50SKL98TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



//export {db,app,analytics,auth,provider}
export { db, app, auth, googleProvider }