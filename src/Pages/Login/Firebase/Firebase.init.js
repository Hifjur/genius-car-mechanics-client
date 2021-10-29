import {initializeApp} from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthenticaiton = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthenticaiton;