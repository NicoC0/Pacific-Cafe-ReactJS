// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    
    apiKey: "AIzaSyAbptlauoiGwPsDDJiAO9AEjaJ5SXhX2FY",
    authDomain: "pacific-store-760a6.firebaseapp.com",
    projectId: "pacific-store-760a6",
    storageBucket: "pacific-store-760a6.appspot.com",
    messagingSenderId: "73903663236",
    appId: "1:73903663236:web:a99f41df7be0204d4c7ad1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;