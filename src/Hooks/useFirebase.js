import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import firebaseInitalize from '../components/Firebase/FirebaseInitalize/FirebaseInitalize';

firebaseInitalize();

const useFirebase = () => {



    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // register new user

    const registerUser = (email, password, name, navigate, location) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then((user) => {
                    setSuccess("Your account create successfully");
                    const destination = location?.state?.from || '/';
                    navigate(destination);
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setSuccess("Your login successfully");
                setError('');
                console.log(destination,"destination");
            })
            .catch((error) => {
                setError(error.message);
                setSuccess("");
            })
            .finally(() => setIsLoading(false));
    }


    // sign with google
    const handaleGoogleSign = (location, navigate) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                navigate(location?.state?.from||"/")
                const user = result.user;
               
                saveUser(user.email, user.displayName, 'PUT');
               
                setSuccess("Your login successfully");
                
            })
            .catch((error) => {
                setError(error.message);
                setSuccess("");;
            })
            .finally(() => setIsLoading(false));
            
    }


    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth]);


    // log out method

    const handaleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
                setSuccess("");
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }


    // save user on database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://glacial-shelf-30568.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    // get web admin
    // useEffect(() => {
    //     fetch(`https://whispering-ridge-34346.herokuapp.com/users/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.Admin))
    // }, [user?.email])









    return {
        handaleGoogleSign,
        user,
        loginUser,
        error,
        admin,
        isLoading,
        registerUser,
        handaleLogOut,
        success
    }
};

export default useFirebase;