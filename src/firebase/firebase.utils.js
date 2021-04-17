import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyB667OhCOZG9NKeN7mjsjkBlSlTbrPy_qM",
  authDomain: "practicereactjs-1cfcb.firebaseapp.com",
  projectId: "practicereactjs-1cfcb",
  storageBucket: "practicereactjs-1cfcb.appspot.com",
  messagingSenderId: "184914223083",
  appId: "1:184914223083:web:49b116a9641157b19203ae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
