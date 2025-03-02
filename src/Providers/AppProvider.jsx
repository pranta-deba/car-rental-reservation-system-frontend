/* eslint-disable react-refresh/only-export-components */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Services/firebase.config';
import { getToken, setToken } from '../Utils/token.config';
import AxiosInstanceWithToken from '../Config/AxiosInstanceWithToken';
import AxiosInstance from '../Config/AxiosInstance';

export const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);
    const [theme, setTheme] = useState('light');

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setUserLoader(true);
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUserLoader(true);
            const token = getToken();
            if (token) {
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
            } if (currentUser) {
                const { displayName, email, phoneNumber, photoURL } = currentUser;
                AxiosInstance.post('/auth/google-signup', {
                    name: displayName,
                    email,
                    phone: phoneNumber,
                    photo: photoURL,
                }).then((res) => {
                    if (res?.data?.success) {
                        setUser(res?.data?.data);
                        setToken(res?.data?.token);
                        setUserLoader(false);
                    }
                }).catch((err) => {
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
    const LogOut = () => {
        return signOut(auth);
    }

    console.log(user)


    const appValue = {
        user,
        setUser,
        theme,
        setTheme,
        googleSignIn,
        LogOut,
        userLoader
    }

    return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>
};

export default AppProvider;