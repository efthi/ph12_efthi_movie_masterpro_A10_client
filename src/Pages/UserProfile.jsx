// src/Pages/UserProfile.jsx

import React, { use, useEffect } from 'react';
import { User2, Mail, Edit3, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';

const UserProfile = () => {
  // Page title
  useEffect(() => {
    document.title = 'My Profile | Movie Master Pro';
  }, []);

  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center m-10">
        <Spinner />
      </div>
    );
  }

  // নিরাপত্তার জন্য (যদি কোনোভাবে PrivateRoute ছাড়া আসেও)
  if (!user) {
    return (
      <div className="flex justify-center m-10">
        <div className="shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4 text-center">
          <p className="font-bold mb-2">You are not logged in.</p>
          <Link to="/login" className="btn btn-neutral btn-sm">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const photoURL =
    user.photoURL ||
    'https://i.ibb.co/4pDNDk1/avatar-default.png'; // চাইলে নিজের placeholder দাও
  const displayName = user.displayName || 'No name set';
  const email = user.email || 'No email found';

  return (
    <>
      <div className="flex justify-center m-10">
        <div className="shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <div className="fieldset flex flex-col items-center gap-4">
            <p className="font-bold text-xl text-center">My Profile</p>

            {/* প্রোফাইল ছবি */}
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt={displayName} />
              </div>
            </div>

            {/* নাম */}
            <div className="w-full">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <div className="input flex items-center gap-2">
                <User2 size={18} />
                <span className="truncate">{user.displayName}</span>
              </div>
            </div>

            {/* ইমেইল */}
            <div className="w-full">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <div className="input flex items-center gap-2">
                <Mail size={18} />
                <span className="truncate">{email}</span>
              </div>
            </div>

            {/* বাটনগুলো */}
            <div className="mt-4 flex flex-col gap-2 w-full">
              <Link to="/edituserprofile" className="btn btn-neutral w-full">
                <Edit3 size={18} />
                Edit Profile
              </Link>
              <Link to="/" className="btn btn-outline w-full">
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
