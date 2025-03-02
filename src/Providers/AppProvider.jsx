/* eslint-disable react-refresh/only-export-components */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Services/firebase.config';
import { getToken } from '../Utils/token.config';
import AxiosInstanceWithToken from '../Config/AxiosInstanceWithToken';

export const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(null);
    const [theme, setTheme] = useState('light');

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setUserLoader(true);
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            const token = getToken();
            if (currentUser) {
                const { displayName, email, phoneNumber, photoURL, metadata } = currentUser;
                setUser({
                    name: displayName,
                    email,
                    phone: phoneNumber,
                    image: photoURL,
                    metadata
                });
                setUserLoader(false);
            } else if (token) {
                AxiosInstanceWithToken.get('/auth/signin-with-token').then(res => {
                    if (res?.data?.success) {
                        setUser(res?.data?.data);
                        setUserLoader(false);
                    }
                }).catch(err => {
                    if (!err?.response?.data?.success) {
                        signOut(auth);
                        setUser(null);
                        setUserLoader(false);
                    }
                })
            } else {
                setUser(null);
                setUserLoader(false);
            }
        })
        return () => unSubscribed();
    }, [])

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const googleLogOut = () => {
        return signOut(auth);
    }

    console.log(user)


    const appValue = {
        user,
        setUser,
        theme,
        setTheme,
        googleSignIn,
        googleLogOut,
        userLoader
    }

    return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>
};

export default AppProvider;