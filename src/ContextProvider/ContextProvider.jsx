import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase";
import { updateProfile } from "firebase/auth"


export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // creating user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile method
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // verificationLinkSender
    const sendVerificationLink = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // logInUser
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // reset password
    const resetUserPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // user observer so much important, it holds the user even-if page reloads
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current User is', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [user])

    // sharing global info's
    const globalInfo = {
        user,
        createUser,
        profileUpdate,
        sendVerificationLink,
        loginUser,
        logOut,
        resetUserPassword,
        loading,
    }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node,
}

export default ContextProvider