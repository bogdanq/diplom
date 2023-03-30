import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRfTNL5XzyHKx2PFctb-ddk3imovzZvQ0",
  authDomain: "diplom-a1718.firebaseapp.com",
  databaseURL:
    "https://diplom-a1718-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diplom-a1718",
  storageBucket: "diplom-a1718.appspot.com",
  messagingSenderId: "701310193793",
  appId: "1:701310193793:web:d9900da18841ae17d3fd80",
  measurementId: "G-1MVVP7VECT",
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
