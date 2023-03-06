let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyBcsmqe0ZSpmFdjCWKgDYnuorwgsYheKMY",
    authDomain: "tech-blog-website-f705d.firebaseapp.com",
    projectId: "tech-blog-website-f705d",
    storageBucket: "tech-blog-website-f705d.appspot.com",
    messagingSenderId: "70698364097",
    appId: "1:70698364097:web:22336b831dbe3d0f1db840",
    measurementId: "G-8JPV2PSTQG"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();