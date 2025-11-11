
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLocation, Navigate } from 'react-router';
import Spinner from '../Components/Spinner';

const GuestRoute = ( {children} ) => {

const { user, loading } = use(AuthContext);
const location = useLocation();
    if(user) {
        const backTo = location.state?.from?.pathname || "/";
        return <Navigate to ={backTo} replace/>;
    }
    
    return (  children  );
};

export default GuestRoute;