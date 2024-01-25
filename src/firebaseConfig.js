import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set,get ,update,remove } from "firebase/database";
import { getAuth, signInWithPhoneNumber, signInWithCredential, PhoneAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBOXA33MUCKHIvM7yE3eNXlhYHt6RFuZwA",
  authDomain: "jarvissystems-62e08.firebaseapp.com",
  projectId: "jarvissystems-62e08",
  storageBucket: "jarvissystems-62e08.appspot.com",
  messagingSenderId: "378333214098",
  appId: "1:378333214098:web:918da522c2271269cebd4b"
};


export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function register(phoneNumber, username, email,password){
    const dbb = getDatabase();
    set(ref(dbb, 'users/' + phoneNumber), {
      username: username,
      email: email,
      password:password,
      phoneNumber:phoneNumber
    });
    alert("Registration Successfull")
}







