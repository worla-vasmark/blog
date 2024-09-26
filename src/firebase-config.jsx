import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4C9Q8kpr9n__iQNvvTncE24_lsMc-qSI",
  authDomain: "blogproject-60d7d.firebaseapp.com",
  projectId: "blogproject-60d7d",
  storageBucket: "blogproject-60d7d.appspot.com",
  messagingSenderId: "313584455920",
  appId: "1:313584455920:web:5144b645cddeedba5eb235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();