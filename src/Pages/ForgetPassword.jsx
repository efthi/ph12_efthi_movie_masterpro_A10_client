import React, { useEffect } from 'react';
import { Mail, SendHorizonal } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const ForgetPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password | Movie Master Pro';
  }, []);


  const handleForgotPassword = (e) => {
    e.preventDefault();
    // এখন শুধু UI, পরে ফাংশনালিটি বসাবে
  };
console.log(location);

  return (
    <div className="flex justify-center m-10">
      <div className="shadow-indigo-600 shadow-2xl bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <form onSubmit={handleForgotPassword}>
          <fieldset className="fieldset">
            <p className="font-bold text-xl text-center">Forgot Password</p>
            <p className="text-sm text-center opacity-70 mb-2">
              Enter your email to reset your password.
            </p>
            <label className="label">Email</label>
            <label className="input">
              <Mail color="#ff0000" />
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              <SendHorizonal color="#ff0000" />
              Send Reset Link
            </button>

            <div className="mt-4 text-center text-sm">
              Remembered your password?{' '}
              <Link to="/login" className="btn-link text-accent">
                Back to Login
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
