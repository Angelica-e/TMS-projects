import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-kqMjOk8_unGD7DtlzuQrtADAQ2EYALA",
    authDomain: "react-firebase-2-f82bf.firebaseapp.com",
    databaseURL: "https://react-firebase-2-f82bf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-firebase-2-f82bf",
    storageBucket: "react-firebase-2-f82bf.appspot.com",
    messagingSenderId: "466588057709",
    appId: "1:466588057709:web:5a4f081260556a60dabf64"
};

firebase.initializeApp(config);

export default firebase;
