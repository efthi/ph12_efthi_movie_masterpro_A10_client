import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const [showpass, setShowpass] = useState(false);
    const navigate = useNavigate();
    const title = useEffect(() => {
    document.title = "Register | SkillSwap";
     }, []);
    const { createUser } = use(AuthContext);
    const handleSignUp = (e) =>{
        e.preventDefault();
        const displayName = e.target.name?.value;
        const email = e.target.email?.value;
        const photoURL = e.target.imageurl?.value;
        const password = e.target.password?.value;
        const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;
        console.log(regExp.test(password));
            if (!regExp.test(password)) {
        toast.error(
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
        );
        return;
        }

        console.log(displayName, email, password, photoURL);
        createUser(email, password)
            .then(result=>{
                console.log(result.user);
                e.target.reset();
                navigate('/');
                toast.error(e.message);
            })
            .catch((e)=>{
                console.log(e);
                toast.error(e.message);
                
            });
    } 

    const handlePass = (e) => {
        e.preventDefault();
        setShowpass(!showpass);
        console.log(showpass);
        
    }
    return (
        <div className='flex justify-center'>
        <div className='card'>
            <form onSubmit={handleSignUp} className='m-16'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Register</legend>

                <label className="label">Name</label>
                <input type="text" className="input" name='name' placeholder="Type Your Name here!" />
                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" />

                <div className="relative">
                    <label className="label">Password</label>
                    <input type={showpass ? 'text' : 'password'} className="input" name='password' placeholder="Password" />
                    <button onClick={handlePass} className="btn btn-xs absolute top-7 right-1">{showpass ? '🐵' : '🙈'}</button>
                </div>
                <label className="label">Image</label>
                <input type="text" className="input" name='imageurl' placeholder="Place your image link here" />
                <button className="btn btn-accent mt-4">Register</button>
                <ToastContainer></ToastContainer>
            </fieldset>
            <div>
            <p><span className='text-warning font-bold underline'>Already have an account?</span>
             <NavLink to='/login'><span className='text-success font-extrabold '> Login!</span></NavLink>
             </p>
            </div>
            </form> 
        </div> 
        </div>
    );
};

export default Signup;