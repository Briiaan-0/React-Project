// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL: "https://react-project-af850-default-rtdb.europe-west1.firebasedatabase.app/",
    apiKey: "AIzaSyCo63XjLSZBVMgafw04nGQzrIppsTnaY5A",
    authDomain: "react-project-af850.firebaseapp.com",
    projectId: "react-project-af850",
    storageBucket: "react-project-af850.firebasestorage.app",
    messagingSenderId: "478425807740",
    appId: "1:478425807740:web:071669b89e42b20b9042f9",
    measurementId: "G-S9ZS6ZS4PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;