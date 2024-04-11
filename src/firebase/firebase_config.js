import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvDBcf6JfVsJOLYWn4qPUW0Ejf_ajVzeg",
  authDomain: "fristhomes-ca394.firebaseapp.com",
  projectId: "fristhomes-ca394",
  storageBucket: "fristhomes-ca394.appspot.com",
  messagingSenderId: "211863506237",
  appId: "1:211863506237:web:871f2fdae014c633050954",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
