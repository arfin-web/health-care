import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail,
    signInWithPopup, GoogleAuthProvider, signOut
} from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const history = useHistory()

    const [user, setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 character')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('');
                emailVerification();
                alert('Registration Complete');
                history.push('/signin');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                alert('Check your inbox')
            })
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('check your inbox')
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('');
                alert('Login Success')
                history.push('/home');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setError('');
                alert('Login Success');
                history.push('/home');
            }).catch((error) => {
                setError('')
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        handleRegistration,
        handleLogin,
        resetPassword,
        signInWithGoogle,
        logOut,
        setEmail,
        setPassword,
        user,
        error
    }
};

export default useFirebase;