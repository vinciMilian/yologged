import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyASSqN22Jr3esQ1VdNfWmBKtrlxlAShOBA",
  authDomain: "yulogged.firebaseapp.com",
  projectId: "yulogged",
  storageBucket: "yulogged.firebasestorage.app",
  messagingSenderId: "78091933238",
  appId: "1:78091933238:web:096d7c339d92875f1daa97"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app