// src/Pages/EditProfile.jsx

import React, { use, useEffect, useState } from 'react';
import { Image as ImageIcon, User2, KeyRound, Save, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile, updatePassword } from 'firebase/auth';

const EditProfile = () => {
  // Page Title
  useEffect(() => {
    document.title = 'Edit Profile | Movie Master Pro';
  }, []);

  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();

  const [photoURL, setPhotoURL] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updating, setUpdating] = useState(false);

  // user থেকে initial value সেট করা
  useEffect(() => {
    if (user) {
      setPhotoURL(user.photoURL || '');
      setDisplayName(user.displayName || '');
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center m-10">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

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

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      // নাম + ছবি আপডেট (Firebase user)
      await updateProfile(user, {
        displayName: displayName.trim(),
        photoURL: photoURL.trim(),
      });

      // যদি নতুন পাসওয়ার্ড দেওয়া হয়, তাহলে সেটাও আপডেট
      if (newPassword.trim().length > 0) {
        if (newPassword.trim().length < 6) {
          toast.error('Password must be at least 6 characters.');
          setUpdating(false);
          return;
        }
        await updatePassword(user, newPassword.trim());
      }

      toast.success('Profile updated successfully!');
      setNewPassword('');
      setTimeout(() => {
        navigate('/userprofile'); // চাইলে '/' ও করতে পারো
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to update profile.');
    } finally {
      setUpdating(false);
    }
  };

  // লাইভ প্রিভিউ ইমেজের জন্য
  const photoPreview =
    photoURL?.trim() ||
    'https://i.ibb.co/4pDNDk1/avatar-default.png'; // fallback placeholder

  return (
    <>
      <div className="flex justify-center m-10">
        <div className="shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset flex flex-col gap-3">
              <p className="font-bold text-xl text-center">Edit Profile</p>

              {/* 🔹 উপরে প্রিভিউ ইমেজ */}
              <div className="flex justify-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photoPreview} alt={displayName || 'User photo'} />
                  </div>
                </div>
              </div>

              {/* Photo URL */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <label className="input flex items-center gap-2">
                  <ImageIcon size={18} />
                  <input
                    type="text"
                    className="input grow"
                    name="photoURL"
                    placeholder="https://your-photo-url.com/image.jpg"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}  // ⬅️ টাইপ করলেই ওপরের ইমেজ চেঞ্জ
                  />
                </label>
              </div>

              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <label className="input flex items-center gap-2">
                  <User2 size={18} />
                  <input
                    type="text"
                    className="input grow"
                    name="displayName"
                    placeholder="Your name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </label>
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">New Password</span>
                </label>
                <label className="input flex items-center gap-2">
                  <KeyRound size={18} />
                  <input
                    type="password"
                    className="input grow"
                    name="newPassword"
                    placeholder="Leave blank to keep current password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </label>
                <p className="text-xs opacity-70 mt-1">
                  * Keep empty if you don&apos;t want to change your password.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-2 w-full">
                <button
                  type="submit"
                  className="btn btn-neutral w-full"
                  disabled={updating}
                >
                  {updating && (
                    <span className="loading loading-spinner loading-xs mr-1" />
                  )}
                  <Save size={18} />
                  Update Profile
                </button>

                <Link to="/" className="btn btn-outline w-full">
                  <ArrowLeft size={18} />
                  Back to Home
                </Link>
              </div>
            </fieldset>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            theme="dark"
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
