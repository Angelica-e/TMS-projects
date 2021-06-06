import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCIJbaAcPXxxU2Ti7qFr8nrrt4ZdlrPdxY",
    authDomain: "device-store-1cfeb.firebaseapp.com",
    databaseURL: "https://device-store-1cfeb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "device-store-1cfeb",
    storageBucket: "device-store-1cfeb.appspot.com",
    messagingSenderId: "16848210819",
    appId: "1:16848210819:web:75bc985629c4e3ae3ac4b6"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
