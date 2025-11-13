import React, { use, useEffect, useState } from 'react';
import { Mail, SquareAsterisk, Image, Eye, EyeOff, User } from 'lucide-react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
//Page Title
useEffect(()=>{
    document.title = 'Register | Movie Master Pro '
  }, []);
//আগের পেইজের location ধরা
const location = useLocation();
//show/hide এর জন্য state
const [showpass, setShwopass] = useState(false);

//show/hide password toggle এর ফাংশন এখানে
const showHidePass = (e) => {
    e.preventDefault();
   // console.log(showpass);
    setShwopass(!showpass);
};

//এটা দিয়ে url Navigation এর মান ধরার জন্য, পরে navigate এ ভ্যালু দিয়ে লিংক সেট হবে
const navigate = useNavigate(); 

const {createUser, signInWithGoogle, loading} = use(AuthContext); //createUser কে AuthContext এর মাধ্যমে এখানে আনা হলো

//handleSignUp হবে এখানে
const handleSignUp = (e) => {
  e.preventDefault();
  const displayName = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const photoURL = e.target.imageurl.value;

  console.log(displayName, email, password, photoURL);

  createUser(email, password)
    .then((result) => {
      console.log('Firebase user:', result.user);

      // এখানে চাইলে displayName / photoURL Firebase profile এও সেট করতে পারো
      // updateProfile(result.user, { displayName, photoURL })

      // 🔹 এখন MongoDB তে পাঠাই
      fetch('http://localhost:3000/registerUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,          // form থেকে নেয়া
          name: displayName,     // form থেকে নেয়া
          photoURL: photoURL,    // চাইলে backend এ use করবে
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('registerUser response:', data);

          // চাইলে success check করতে পারো
          if (!data.success) {
            toast.error(data.message || 'User save failed in DB');
            return;
          }

          toast.success(
            `Congrats! ${displayName} Registration complete, Login now!`
          );

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        })
        .catch((err) => {
          console.error('registerUser error:', err);
          toast.error('Could not save user in database');
        });
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.message);
    });
};

//Googleদিয়ে লগিন
// Google দিয়ে লগিন
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
        <div className={loading ? 'hidden' : 'flex justify-center m-10'}>
        <div className='shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4'>
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset ">
                    <p className='font-bold text-xl text-center'>To Join, Register  </p>
                    {/* Email section */}
                    <label className="label">Name</label>
                        <label className='input'><User color="#ff0000" />
                            <input type="name" className="input input-primary" name="name" placeholder="Your Name" />
                    </label>
                    {/* Email section */}
                    <label className="label">Email</label>
                        <label className='input'><Mail color="#ff0000" />
                            <input type="email" className="input input-primary" name="email" placeholder="Email" />
                    </label>
                    {/* Password Section */}
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
                    {/* Image input field */}
                    <label className="label">Image</label>
                    <label className="input">
                        <Image color="#ff0000" />
                        <input type="text" className="input" name='imageurl' placeholder="Place your image link here" />
                    </label>
                    <button className="btn btn-accent mt-4">Register</button>
                    <p><span className='text-error text-sm font-bold underline'>Already have an account?</span>
                    <NavLink to='/login'><span className='text-success font-extrabold text-sm'> Login!</span></NavLink>
                    </p>
                   
                </fieldset>
                <ToastContainer position="top-center"
                    autoClose={6000}
                    closeOnClick={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"/>
            </form>
             <div className='text-center'>
                <div className="divider">OR</div>
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button> 
            </div>
        </div> 
        </div>
        </>
    );
};

export default Register;