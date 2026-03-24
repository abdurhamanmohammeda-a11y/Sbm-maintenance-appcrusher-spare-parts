// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Yoo analytics barbaadde: import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1_0Ptpna4V-2cfyJHNwIvWvbA2eGLv18",
  authDomain: "sbm-app-ecf59.firebaseapp.com",
  databaseURL: "https://sbm-app-ecf59-default-rtdb.firebaseio.com",
  projectId: "sbm-app-ecf59",
  storageBucket: "sbm-app-ecf59.firebasestorage.app",
  messagingSenderId: "666387083873",
  appId: "1:666387083873:web:bfd6d5e064ecaad6c73020",
  measurementId: "G-W6VPWH2J3R"
};

// Firebase app
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);  // barbaadde yoo ta'e
