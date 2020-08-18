import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyALxBr_ZNfr4aJv-mRUUobWCMTObDjcOXk",
    authDomain: "core-verbena-243106.firebaseapp.com",
    databaseURL: "https://core-verbena-243106.firebaseio.com",
    projectId: "core-verbena-243106",
    storageBucket: "core-verbena-243106.appspot.com",
    messagingSenderId: "707533556199",
    appId: "1:707533556199:web:ca34a79aa0b592b797d542",
    measurementId: "G-3HXMD7VQ9Q" ,
});
const auth =firebase.auth();
export { auth };