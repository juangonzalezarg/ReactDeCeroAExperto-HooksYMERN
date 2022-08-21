import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAmRdmOSpN1_bEeqSjiC9iRpoz3fIO28iM",
    authDomain: "react-app-cursos-21d32.firebaseapp.com",
    projectId: "react-app-cursos-21d32",
    storageBucket: "react-app-cursos-21d32.appspot.com",
    messagingSenderId: "437306449547",
    appId: "1:437306449547:web:0252afab3a8bec11257e8e"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }