import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
export { db };
export { storage };
export const auth = getAuth(app);
