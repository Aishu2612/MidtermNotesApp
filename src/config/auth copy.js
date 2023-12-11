// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


//import { getAuth, signInWithRedirect,GoogleAuthProvider } from "firebase/auth";
//const provider = new GoogleAuthProvider();
//const auth = getAuth();
//signInWithRedirect(auth, provider)



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
const analytics = getAnalytics(app);

const db = getFirestore(app)

//export {db,app,analytics,auth,provider}
export {db,app,analytics}