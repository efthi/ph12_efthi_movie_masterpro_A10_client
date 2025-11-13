import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, 
    onAuthStateChanged, signInWithEmailAndPassword, 
    signInWithPopup,
    signOut} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ( {children} ) => {
    
    const [user, setUser] = useState(null); //user এর জন্য
    const [loading, setLoading] = useState(true);

    /** Create User by Password Authentication */
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /** Sign In User by Password Authentication*/
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=>{
          setLoading(false);  
        })
    }
    //এটা আরেকটু বুঝতে হবে, উপরে user এর মান সেট করতেছে
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, []);
    
    //SignIn with Google
    const googleProvider = new GoogleAuthProvider(); 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //SighOut
    const SignOutUser = () => {
        return signOut(auth)
    }

  
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        SignOutUser
    }
    
    return (
        // এখানে Provider লিখি নাই প্রথমে
        <AuthContext.Provider value = {authInfo}>  
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;