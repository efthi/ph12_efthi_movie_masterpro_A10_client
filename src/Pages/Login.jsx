import React, { use, useEffect, useState} from 'react';
import { Mail, SquareAsterisk, LogIn, Eye, EyeOff } from 'lucide-react';
import { Link, NavLink,useLocation,useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

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

//locattion এর ডেটা ধরার জন্য
let location = useLocation();


//এটা দিয়ে url Navigation এর মান ধরার জন্য, পরে navigate এ ভ্যালু দিয়ে লিংক সেট হবে
const navigate = useNavigate(); 

const {signInUser, signInWithGoogle, user, loading} = use(AuthContext); //signIn কে AuthContext এর মাধ্যমে এখানে আনা হলো
//Login এর প্রসেস হ্যান্ডেল হবে এখান থেকে
const handleLogin =(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password); //test এর জন্য 
       signInUser(email, password)
        .then(result=> {
            console.log(result.user);
            toast.success('Login Successful!');
            setTimeout(()=> {
            //navigate(from, {replace:true})
            //চাইলে উপরের from নামের চলকেও করা যায় const from = location.state?.from?.pathname || "/allmovies"; 
            navigate(location.state ||'/allmovies')
            }, 2000);
        })
        .catch((error) => {
            console.log(error);
            toast.success('Login Failed')
            setTimeout(()=> {
            //navigate(from, {replace:true})
            //চাইলে উপরের from নামের চলকেও করা যায় const from = location.state?.from?.pathname || "/allmovies"; 
            navigate('/login')
            }, 2000);
            
        })
}

//Googleদিয়ে লগিন
const handleGoogleLogin = () => {
  signInWithGoogle()
    .then((result) => {
      console.log('Google login result:', result);
      const fbUser = result.user; // Firebase user object

      // 👉 প্রথমে MongoDB তে ইউজার info পাঠাই
      fetch('http://localhost:3000/registerUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: fbUser.email,
          name: fbUser.displayName,
          photoURL: fbUser.photoURL, // চাইলে backend এ use করতে পারো
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('registerUser (google) response:', data);

          // success না হলেও শুধু warning দিতে পারো, login তো হয়ে গেছে
          if (!data.success) {
            console.warn('User not saved in DB:', data.message);
          }

          toast.success('Login Successful!');
          setTimeout(() => {
            // navigate(from, { replace: true }) ও করতে পারো
            navigate('/register');
          }, 2000);
        })
        .catch((err) => {
          console.error('registerUser (google) error:', err);
          // চাইলে এখানে ছোট একটা warning দেখাতে পারো
          toast.warn('Login হলো, কিন্তু user DB তে save হয়নি');
          setTimeout(() => {
            navigate('/register');
          }, 2000);
        });
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

    return (
        <>
         <div className={loading ? 'hidden' : 'flex justify-center m-10 '}>
            <div className='shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4'>
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset ">
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
                    
                    {/* Register এ যাওয়ার লিংক */}
                    <div className="mt-2 font-bold text-center">
                        <span>Don't Have an account? </span>
                        <Link to="/register" type="button"  className="btn-link text-sm text-accent">
                        Register
                        </Link>
                    </div>

                </fieldset>
            </form>
            <div className='p-4 text-center'>
                <div className="divider">OR</div>
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button> 
            </div>
             <ToastContainer position="top-center"
                    autoClose={6000}
                    closeOnClick={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"/>
            </div>
        </div>
        </>
       
    );
};

export default Login;