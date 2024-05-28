import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAaoUD0jd73fXk5AONSzRky5-YK6fCS2nI",
  authDomain: "music-app-e9bd5.firebaseapp.com",
  projectId: "music-app-e9bd5",
  storageBucket: "music-app-e9bd5.appspot.com",
  messagingSenderId: "147237385884",
  appId: "1:147237385884:web:f111886a8ce53f6430df59",
  measurementId: "G-JCM1VWHPDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const musicFileDatabase = getFirestore(app);
const storage = getStorage(app);

export { musicFileDatabase, storage };
