// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCsByXjI090RIeCAV5ShoyaVzD8-G0w2vw",
//   authDomain: "react-cursos-92394.firebaseapp.com",
//   projectId: "react-cursos-92394",
//   storageBucket: "react-cursos-92394.appspot.com",
//   messagingSenderId: "978430087679",
//   appId: "1:978430087679:web:73f31f26e24af992ab57ca"
// };
console.log( import.meta.env )
// Testing
const firebaseConfig = {
  apiKey: "AIzaSyDNZzyvtHRGPqYRFXE9SWywlNdOM3cux7E",
  authDomain: "react-cursos-test-617c7.firebaseapp.com",
  projectId: "react-cursos-test-617c7",
  storageBucket: "react-cursos-test-617c7.appspot.com",
  messagingSenderId: "739958489562",
  appId: "1:739958489562:web:c26e88f061430f383040e3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );

