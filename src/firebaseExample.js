import firebase from 'firebase/app';
import "firebase/auth"
//Add the following info to run your personal project
export const auth = firebase.initializeApp ({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSENGERS_ID",
    appId: "YOUR_APP_ID"
  }).auth();
