import firebase from 'firebase'
// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyD_TJh1zWiQA3Whz31Dy5dtpBEWRUyamAA",
    authDomain: "los-espetinhos.firebaseapp.com",
    databaseURL: "https://los-espetinhos.firebaseio.com",
    projectId: "los-espetinhos",
    storageBucket: "los-espetinhos.appspot.com",
    messagingSenderId: "709187181623",
    appId: "1:709187181623:web:c963078cd3cb6133c2b3b2",
    measurementId: "G-E878QGYV22"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
