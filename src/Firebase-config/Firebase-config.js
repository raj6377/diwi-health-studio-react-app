import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'


// const firebaseConfig = {
//     apiKey: "AIzaSyCK3nag5DHrcHOfYTCh09e1xu6iS8_P70o",
//     authDomain: "diwi-health-studio.firebaseapp.com",
//     projectId: "diwi-health-studio",
//     storageBucket: "diwi-health-studio.appspot.com",
//     messagingSenderId: "89321223298",
//     appId: "1:89321223298:web:45f9df7c70f09aa486309b",
//     measurementId: "G-LN8ZSKSRJB"
//   };

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDPV_WB3_KzsKPhJX9D8AtaT9YBRFzdWMs",
  authDomain: "diwi-health-studio-370306.firebaseapp.com",
  projectId: "diwi-health-studio-370306",
  storageBucket: "diwi-health-studio-370306.appspot.com",
  messagingSenderId: "255046250570",
  appId: "1:255046250570:web:e89138593938362ee4f6b3",
  measurementId: "G-BMGFY25V7F"
});

  const db = firebaseApp.firestore();
  export{db};
  export const auth = getAuth();