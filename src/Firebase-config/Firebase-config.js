import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//     apiKey: "AIzaSyCK3nag5DHrcHOfYTCh09e1xu6iS8_P70o",
//     authDomain: "diwi-health-studio.firebaseapp.com",
//     projectId: "diwi-health-studio",
//     storageBucket: "diwi-health-studio.appspot.com",
//     messagingSenderId: "89321223298",
//     appId: "1:89321223298:web:45f9df7c70f09aa486309b",
//     measurementId: "G-LN8ZSKSRJB"
//   };

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAu9bRbm4l-f_y5LV8k8Q9_RakkTkwO16k",
    authDomain: "diwi-health-studio-e4fcf.firebaseapp.com",
    projectId: "diwi-health-studio-e4fcf",
    storageBucket: "diwi-health-studio-e4fcf.appspot.com",
    messagingSenderId: "442881559855",
    appId: "1:442881559855:web:ae8441d8f6f9f0c3ed25da",
    measurementId: "G-E0FRR6HCEH"
  });

 const db = firebaseApp.firestore();

 export {db};
 export const auth=getAuth();