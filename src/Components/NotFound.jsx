import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = '404 | Page Not Found';
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 shadow-indigo-600 shadow-xl bg-base-200/50 border-base-300 rounded-box ">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-2 text-lg opacity-80 font-bold text-red-500 ">Page not found</p>
      <p className="mt-1 text-md opacity-60 font-semibold text-indigo-600 ">Requested URL: <code className="px-1">{pathname}</code></p>

      <div className="mt-6 flex gap-3">
        <Link to="/" className="btn btn-primary">Go Home</Link>
        <button onClick={() => history.back()} className="btn btn-outline">
          Go Back
        </button>
      </div>
    </div>
  );
}
