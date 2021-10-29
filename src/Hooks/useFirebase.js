
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaiton from "../Pages/Login/Firebase/Firebase.init";

initializeAuthenticaiton();

const useFirebase = () => {
    const [user, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUsers(result.user);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[])

    const logOut =() => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(()=> setIsLoading(false));
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;