import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwx2k1zLn7BDqVVE4Q2CtSxUriq9bpK8k",
  authDomain: "udemy-ninja-smoothies-8272c.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-8272c.firebaseio.com",
  projectId: "udemy-ninja-smoothies-8272c",
  storageBucket: "udemy-ninja-smoothies-8272c.appspot.com",
  messagingSenderId: "323589994224"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()