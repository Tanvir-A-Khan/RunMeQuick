// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC000QyHJODXAFFL02NTGXA9JA14CSVyAo",
  authDomain: "runmequick-94cf5.firebaseapp.com",
  projectId: "runmequick-94cf5",
  storageBucket: "runmequick-94cf5.appspot.com",
  messagingSenderId: "253531065406",
  appId: "1:253531065406:web:33e7e4376567814c64156f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


