import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvijAcalkmhD5X9cX95K7TPuhVs8asiDQ",
  authDomain: "pi6-fi.firebaseapp.com",
  projectId: "pi6-fi",
  storageBucket: "pi6-fi.appspot.com",
  messagingSenderId: "184218528911",
  appId: "1:184218528911:web:f5c35131015f803f27d4fa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)