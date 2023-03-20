import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbWzr5OpflNS8TJWah_aZ4FY_X4B6-M3o",
  authDomain: "twitter-clone-15a17.firebaseapp.com",
  projectId: "twitter-clone-15a17",
  storageBucket: "twitter-clone-15a17.appspot.com",
  messagingSenderId: "130599552562",
  appId: "1:130599552562:web:e61245aacda74039d39e2b",
  measurementId: "G-WFKSHFWMFF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db; 
