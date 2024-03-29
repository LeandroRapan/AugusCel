
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCBZS2vNOIjid4B9c64aBV65klj3808HNU",
  authDomain: "backend-auguscel.firebaseapp.com",
  projectId: "backend-auguscel",
  storageBucket: "backend-auguscel.appspot.com",
  messagingSenderId: "752573519913",
  appId: "1:752573519913:web:9e19e36236839c7dd22438"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth= getAuth(app)