'use client'
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { auth } from "@/config/firebase.config";
import { clearCookie } from "@/lib/auth";
import axiosSecure from "@/lib";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }
    const signOutUser = async () => {
        setLoading(true);
        await clearCookie()
        return signOut(auth);
    };
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axiosSecure.post('/auth/access-token', loggedUser)
                    .then(res => {
                        console.log('token response', res.data);
                        
                    })
            }
            else {
                axiosSecure.get('/auth/logout')
                    .then(() => {
                    })
            }
            
        });
        return ()=>{
            return unSubscribe();
        }
    },[user?.email]);

    const authInfo = {
        user,
        loading,
        signUpUser,
        signInUser,
        resetPassword,
        googleSignIn,
        signOutUser,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;