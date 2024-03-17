import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCVVS-T6N20VSx4svqGSiuzmAxWDyNLML0",
    authDomain: "movieflix-web.firebaseapp.com",
    projectId: "movieflix-web",
    storageBucket: "movieflix-web.appspot.com",
    messagingSenderId: "939052279016",
    appId: "1:939052279016:web:620d608290ffbcb8c8155d",
    measurementId: "G-4Z7MKH9N6L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebaseApp };
export default db;
