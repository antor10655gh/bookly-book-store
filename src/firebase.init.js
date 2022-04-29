// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjamyIK9unfBve2iRi2Mp5DAqvBk1CRGY",
  authDomain: "bookly-project-d23c0.firebaseapp.com",
  projectId: "bookly-project-d23c0",
  storageBucket: "bookly-project-d23c0.appspot.com",
  messagingSenderId: "79185809795",
  appId: "1:79185809795:web:9203a8f968009933e026b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
