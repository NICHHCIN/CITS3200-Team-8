// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIw_pFMH6nhev5K2XFOBoxnEhUSfwvLY4",
  authDomain: "wacrh-3fd97.firebaseapp.com",
  projectId: "wacrh-3fd97",
  storageBucket: "wacrh-3fd97.appspot.com",
  messagingSenderId: "712916838029",
  appId: "1:712916838029:web:810308cf4cae0b9323e4c4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };
