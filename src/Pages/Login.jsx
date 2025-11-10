import React, { useEffect, useState } from 'react';
import { Mail, SquareAsterisk, LogIn, Eye, EyeOff } from 'lucide-react';

const Login = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'Login | Movie Master Pro '
 }, []);

//
const [showpass, setShwopass] = useState(false);


//show/hide password toggle এর ফাংশন এখানে
const showHidePass = (e) => {
    e.preventDefault();
   // console.log(showpass);
    setShwopass(!showpass);
};

//Login এর প্রসেস হ্যান্ডেল হবে এখান থেকে
const handleLogin =(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);    
}

    return (
        <>
         <div className='flex justify-center m-10'>
            <div className='shadow-indigo-600 shadow-2xl'>
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <p className='font-bold text-xl text-center'>Welcome! Please Login </p>
                    <label className="label">Email</label>
                    <label className='input'><Mail color="#ff0000" />
                        <input type="email" className="input" name="email" placeholder="Email" />
                    </label>

                    <div className=''> 
                        {/* আগের প্রজেক্টে position সেট করে নিচের password hide/show বাটনকে পজিশনিং করা হয়েছিল, কিন্তু daisyUI এর <label> এর কারণে আর লাগে নাই */}
                        <label className="label">Password</label>
                        <label className="input">
                            <SquareAsterisk color="#ff0000" />
                            <input type={ showpass ? 'text' : 'password'} className="input" name="password" placeholder="Password" />
                            <button onClick={showHidePass}  className="btn btn-xs bg-transparent">
                                {showpass ? (<Eye color="#ff0000" />) : (<EyeOff color="#ff0000" />)}
                            </button>
                        </label>
                    </div>

                    {/* ⬇️ NEW: Forget password লিংক (রাউটে পাঠাবে) */}
                    <div className="mt-2 text-right">
                        <button type="button"  className="btn btn-link btn-xs text-sm">
                        Forgot password?
                        </button>
                    </div>

                    <button type='submit' className="btn btn-neutral mt-4"><LogIn color="#ff0000" /> Login</button>
                    <div className="divider">OR</div>
                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </fieldset>
            </form>
            </div>
        </div>
        </>
       
    );
};

export default Login;