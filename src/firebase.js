import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsSljurBF_q2Q0Zesc1WbkR9pqK7UNF7k",
  authDomain: "slack-clone-433ce.firebaseapp.com",
  projectId: "slack-clone-433ce",
  storageBucket: "slack-clone-433ce.appspot.com",
  messagingSenderId: "25622180450",
  appId: "1:25622180450:web:e65e82b99f1d286ae6573b",
  measurementId: "G-2BLFQBLG83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
