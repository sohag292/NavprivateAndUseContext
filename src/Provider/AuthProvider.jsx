import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null)
    const [Loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password);

    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut =()=>{
        return signOut(auth)
    }
    //observe auth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        Loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    }

    // const user = {displayName:'sagor Nodi'}

  return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider> 
  )
}
