import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useEmaiPassword = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const auth = getAuth();

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
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
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
        setEmail,
        setPassword,
        user,
        error
    }
};

export default useEmaiPassword;