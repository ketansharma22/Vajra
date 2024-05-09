import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBL7k8KFFLTylIJhb6DnfBT2qU3j6B1Yzo",
  authDomain: "auth-project-48bc8.firebaseapp.com",
  projectId: "auth-project-48bc8",
  storageBucket: "auth-project-48bc8.appspot.com",
  messagingSenderId: "257384254358",
  appId: "1:257384254358:web:84469ff134301c3a1f6bb7",
  measurementId: "G-63VPL476C4"
});

export const auth = getAuth(app)
export default app
export const db=getFirestore(app)
