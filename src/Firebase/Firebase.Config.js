// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  //   apiKey: "AIzaSyC-X7Yo9mJdVLsnnhrRGdKcFklFFS4baMA",
  //   authDomain: "tourist-man-a4780.firebaseapp.com",
  //   projectId: "tourist-man-a4780",
  //   storageBucket: "tourist-man-a4780.appspot.com",
  //   messagingSenderId: "318900230500",
  //   appId: "1:318900230500:web:507d522d8faded73a20271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
