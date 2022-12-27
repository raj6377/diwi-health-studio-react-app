import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import "firebase/compat/storage";

import { getAuth } from "firebase/auth";


//  const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAXnDL79fcW76RYpwYQcvvMDI6S4WRa5Gc",
//   authDomain: "test-5d5e4.firebaseapp.com",
//   projectId: "test-5d5e4",
//   storageBucket: "test-5d5e4.appspot.com",
//   messagingSenderId: "495857734613",
//   appId: "1:495857734613:web:1368d6d75ce99afc12e35c",
//   measurementId: "G-1H02RB1YHF"
//   });

const firebaseConfig ={
  apiKey: "AIzaSyDPV_WB3_KzsKPhJX9D8AtaT9YBRFzdWMs",
  authDomain: "diwi-health-studio-370306.firebaseapp.com",
  projectId: "diwi-health-studio-370306",
  storageBucket: "diwi-health-studio-370306.appspot.com",
  messagingSenderId: "255046250570",
  appId: "1:255046250570:web:e89138593938362ee4f6b3",
  measurementId: "G-BMGFY25V7F"
};
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  export{db};
  export {storage};
  export const auth = getAuth(app);
  