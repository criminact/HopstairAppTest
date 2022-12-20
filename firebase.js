// Import the functions you need from the SDKs you need
import firebase from "firebase";

//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig_Dev = {
  apiKey: "AIzaSyCj-2z2GUgN018idcBHQoD21iFMnfWRzLc",
  authDomain: "hopstair-dev.firebaseapp.com",
  projectId: "hopstair-dev",
  storageBucket: "hopstair-dev.appspot.com",
  messagingSenderId: "466804564491",
  appId: "1:466804564491:web:85ed2699097208c17edd0e",
  measurementId: "G-9S13Z5FVT6"
};

const firebaseConfig_Test = {
  apiKey: "AIzaSyCICR5NjVM9P_TJg7FC1aqhvTLqb954_QY",
  authDomain: "hopstair-test.firebaseapp.com",
  projectId: "hopstair-test",
  storageBucket: "hopstair-test.appspot.com",
  messagingSenderId: "3477328856",
  appId: "1:3477328856:web:48b2719085423f6b9c98ad",
  measurementId: "G-XVQGRCGBXK"
};

const firebaseConfig_Prod = {
  apiKey: "AIzaSyDbwdgrZ54LX_84jz4fSU3O67qd8WE4gmM",
  authDomain: "hopstair-prod.firebaseapp.com",
  projectId: "hopstair-prod",
  storageBucket: "hopstair-prod.appspot.com",
  messagingSenderId: "444619375344",
  appId: "1:444619375344:web:bfdbeab8a4faa2eccff835",
  measurementId: "G-LPH69B066C"
};

// Initialize Firebase
/*let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}*/

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig_Dev)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };