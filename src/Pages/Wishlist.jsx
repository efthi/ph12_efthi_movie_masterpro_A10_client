import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Wishlist = () => {
  const { user } = use(AuthContext);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState('');

  useEffect(() => {
    // user না থাকলে কিছু করব না
    if (!user) {
      setLoading(false);
      setError('Wishlist দেখতে আগে লগিন করতে হবে');
      return;
    }

    const url = `http://localhost:3000/wishlist?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMovies(data.movies);   // backend থেকে আসা movie list
        } else {
          setError(data.message || 'কিছু একটা সমস্যা হয়েছে');
        }
      })
      .catch((err) => {
        console.log(err);
        setError('Server error');
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <div className="p-6">Loading wishlist...</div>;
  }

  if (!user) {
    return (
      <div className="p-6">
        <p className="mb-4 text-red-500">
          Wishlist দেখতে আগে লগিন করতে হবে।
        </p>
        <Link to="/login" className="btn btn-primary">Go to Login</Link>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!movies.length) {
    return (
      <div className="p-6 mx-auto text-center bg-base-100/50">
        <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
        <p>এখনো কোনো movie wishlist এ নেই।</p>
        <Link to="/allmovies" className="btn btn-accent mt-4">
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[90%] m-10">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              {movie.genre && <p>Genre: {movie.genre}</p>}
              {movie.releaseYear && <p>Year: {movie.releaseYear}</p>}
              <div className="card-actions justify-end">
                <Link
                  to={`/moviedetails/${movie._id}`}
                  className="btn btn-sm btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
