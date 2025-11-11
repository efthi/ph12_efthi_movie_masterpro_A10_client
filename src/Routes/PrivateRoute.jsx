import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner';

const PrivateRoute = ( {children} ) => {
    
    const {user, loading} = use(AuthContext);
    let location = useLocation();
    //console.log(location);
    
    if(user) {
        return children;
    }
    
    if(loading) {
        return <Spinner></Spinner>;
    }

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;