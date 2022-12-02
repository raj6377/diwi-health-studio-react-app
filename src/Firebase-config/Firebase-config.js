import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// const firebaseConfig = {
//     apiKey: "AIzaSyCK3nag5DHrcHOfYTCh09e1xu6iS8_P70o",
//     authDomain: "diwi-health-studio.firebaseapp.com",
//     projectId: "diwi-health-studio",
//     storageBucket: "diwi-health-studio.appspot.com",
//     messagingSenderId: "89321223298",
//     appId: "1:89321223298:web:45f9df7c70f09aa486309b",
//     measurementId: "G-LN8ZSKSRJB"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCK3nag5DHrcHOfYTCh09e1xu6iS8_P70o",
  authDomain: "diwi-health-studio.firebaseapp.com",
  projectId: "diwi-health-studio",
  storageBucket: "diwi-health-studio.appspot.com",
  messagingSenderId: "89321223298",
  appId: "1:89321223298:web:45f9df7c70f09aa486309b",
  measurementId: "G-LN8ZSKSRJB"
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);