import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ( {children} ) => {
    
    const [user, setUser] = useState(null); //user এর জন্য
    const [loading, setLoading] = useState(true);

    /** Create User by Password Authentication */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser

    }
    
    return (
        <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;