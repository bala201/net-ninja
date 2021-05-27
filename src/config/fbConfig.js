import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyA_KEVxDaKb_-y2dF_WkQ5WDAkGokpjLD4",
  authDomain: "net-ninja-2a540.firebaseapp.com",
  projectId: "net-ninja-2a540",
  storageBucket: "net-ninja-2a540.appspot.com",
  messagingSenderId: "737111122949",
  appId: "1:737111122949:web:4e86012c2eaf18d497686c"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 