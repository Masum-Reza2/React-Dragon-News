import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase";
import { updateProfile } from "firebase/auth"


export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile method
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // verificationLinkSender


    // logInUser
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out user
    const logOut = () => {
        return signOut(auth);
    }

    // user observer so much important, it holds the user even-if page reloads
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current User is', currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])



    // sharing global info's
    const globalInfo = {
        user,
        createUser,
        profileUpdate,
        loginUser,
        logOut,
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