import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdo3iXhOyDXdSlKFlXyXQjvGWiTaglt3k",
  authDomain: "ug-votehub.firebaseapp.com",
  projectId: "ug-votehub",
  storageBucket: "ug-votehub.firebasestorage.app",
  messagingSenderId: "275352074216",
  appId: "1:275352074216:android:f94fb11b201b2ea292965d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
