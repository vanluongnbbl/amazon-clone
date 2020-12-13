// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqhLz7r_j2K0WQrq1A9PLMwuuehH0i1PE",
    authDomain: "e-clone-d162b.firebaseapp.com",
    projectId: "e-clone-d162b",
    storageBucket: "e-clone-d162b.appspot.com",
    messagingSenderId: "805465297133",
    appId: "1:805465297133:web:4a01bb4ce06708c99ebce4",
    measurementId: "G-R0ZZHS2M3T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 