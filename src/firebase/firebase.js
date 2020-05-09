import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBx1ISThtzqhtqBRCNIhlxWyWU1CNsAI7Y",
    authDomain: "yourexpenseapp.firebaseapp.com",
    databaseURL: "https://yourexpenseapp.firebaseio.com",
    projectId: "yourexpenseapp",
    storageBucket: "yourexpenseapp.appspot.com",
    messagingSenderId: "798629918117",
    appId: "1:798629918117:web:1b0b15dc177adb4119644c",
    measurementId: "G-N680QELLFL"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'Sudipta Saha'
  });