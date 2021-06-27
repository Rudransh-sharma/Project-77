import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC1yMQ3D9c8gJq8v-p1s-fNfvr_bjfcS_U",
  authDomain: "barter-system-app-e0e68.firebaseapp.com",
  projectId: "barter-system-app-e0e68",
  storageBucket: "barter-system-app-e0e68.appspot.com",
  messagingSenderId: "725560847214",
  appId: "1:725560847214:web:31c8204e1be270dac1ef7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
