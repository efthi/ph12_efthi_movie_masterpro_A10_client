import React, { useEffect } from 'react';

const Login = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'Login | Movie Master Pro '
 }, []);

    return (
        <div>
            <p className="text-center m-10 border-2 border-yellow-700">Login Page</p>
        </div>
    );
};

export default Login;