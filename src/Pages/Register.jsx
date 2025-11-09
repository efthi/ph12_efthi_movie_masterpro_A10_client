import React, { useEffect } from 'react';

const Register = () => {
//Page Title
const title = useEffect(()=>{
    document.title = 'Register | Movie Master Pro '
  }, []);

    return (
        <div>
            <p className="text-center m-10 border-2 border-teal-700">Register</p>
        </div>
    );
};

export default Register;