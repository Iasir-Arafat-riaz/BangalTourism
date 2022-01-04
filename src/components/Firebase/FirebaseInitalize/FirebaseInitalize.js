import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

// initalize firbase
const firebaseInitalize = () => {
    initializeApp(firebaseConfig);
};

export default firebaseInitalize;