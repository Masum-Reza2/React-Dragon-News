import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIqOIVzjg_xlmDZ7E9OJk_iovDPNmJkE4",
    authDomain: "react-dragon-news-8dd6a.firebaseapp.com",
    projectId: "react-dragon-news-8dd6a",
    storageBucket: "react-dragon-news-8dd6a.appspot.com",
    messagingSenderId: "1012483280534",
    appId: "1:1012483280534:web:d1089950401fbdcbe0fcb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;