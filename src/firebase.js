import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDKnajfj2WDLpCuI309P3EGm3T-eVCGO0o",
  authDomain: "discord-clone-pulkit.firebaseapp.com",
  databaseURL: "https://discord-clone-pulkit.firebaseio.com",
  projectId: "discord-clone-pulkit",
  storageBucket: "discord-clone-pulkit.appspot.com",
  messagingSenderId: "966381600173",
  appId: "1:966381600173:web:c7b22076fa39ae3c41f524",
  measurementId: "G-H9JMG2RVTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
