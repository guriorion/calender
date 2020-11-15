importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyBi9QF7qZPxXxs1DbnAoXc9btRqGMIUgQw",
    authDomain: "web-push-db0da.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "web-push-db0da",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "870155324419",
    appID: "1:870155324419:web:0e251e0b7334b513201236",
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    const messaging = firebase.messaging();

