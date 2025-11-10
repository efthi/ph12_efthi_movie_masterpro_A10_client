import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';


const UserProfile = () => {

 //Page Title
  const title = useEffect(()=>{
    document.title = 'User Profile | Movie Master Pro '
  }, []);

  //
const {user} = use(AuthContext);
if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}



    return (
        <>
         <div className="container mx-auto max-w-[90%] m-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">                 
            <>
                <div className='shadow-indigo-600 shadow-2xl'>
                {/* <img className='rounded-full' src={profile.photoURL} alt='Profile Picture' /> */}
                </div>
                <div className='flex flex-col gap-10 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
                    <p>{userprovider}</p>
                    {/* <p>{profile.displayName}</p>
                    <p>{profile.email}</p> */}

                </div>
            </>
               
          </div>   
         </div>
        </>
    );
};

export default UserProfile;