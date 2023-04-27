import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFyZNW98fh6cODARz8eqAGa-iP5J8ib4o",
  authDomain: "chalenge-d57e1.firebaseapp.com",
  databaseURL: "https://chalenge-d57e1-default-rtdb.firebaseio.com",
  projectId: "chalenge-d57e1",
  storageBucket: "chalenge-d57e1.appspot.com",
  messagingSenderId: "559093158694",
  appId: "1:559093158694:web:45a1c603e17f28019ca7e7",
  measurementId: "G-FGM65E2W4W",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
