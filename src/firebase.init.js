// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8EflpQdv4YbatPw0bn3cA2Y8fVcsQH3A",
  authDomain: "ema-john-simple-11e67.firebaseapp.com",
  projectId: "ema-john-simple-11e67",
  storageBucket: "ema-john-simple-11e67.appspot.com",
  messagingSenderId: "689988762106",
  appId: "1:689988762106:web:c49d484a42daa6047fcc43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;