// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWjU5CcWor_vIU98Rts7br3YmUgbEfRw",
  authDomain: "notes-project-7343b.firebaseapp.com",
  databaseURL: "https://notes-project-7343b-default-rtdb.firebaseio.com",
  projectId: "notes-project-7343b",
  storageBucket: "notes-project-7343b.appspot.com",
  messagingSenderId: "216518094213",
  appId: "1:216518094213:web:9e24504336f679cb7328ec",
  measurementId: "G-WSX39M5K5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db,app,analytics}