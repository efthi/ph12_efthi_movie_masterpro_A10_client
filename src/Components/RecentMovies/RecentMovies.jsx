// src/Components/RecentMovies.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CalendarClock } from 'lucide-react';
import './RecentMovies.css'; // 🔹 নতুন CSS ইমপোর্ট

const RecentMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/allmoviedata')
      .then((res) => res.json())
      .then((data) => {
        // শেষের ৬টা movie
        const latestSix = data.slice(-6).reverse();
        setMovies(latestSix);
      })
      .catch((err) => {
        console.error(err);
        setError('Recent movie লোড করতে সমস্যা হয়েছে');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-4 text-center">Loading recent movies...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">{error}</div>;
  }

  if (!movies.length) {
    return <div className="py-4 text-center">এখনো কোনো movie নেই</div>;
  }

  // marquee এর জন্য list ডুপ্লিকেট করলাম
  const marqueeMovies = [...movies, ...movies];

  return (
    <div className="container mx-auto max-w-[90%] my-8">
      
      <h2 className="text-2xl font-bold mb-4">Recently Added Movies</h2>

      {/* 🔥 Marquee container */}
      <div className="recent-marquee-container">
        <div className="recent-marquee-track">
          {marqueeMovies.map((movie, index) => (
            <div
              key={movie._id + '-' + index}
              className="
                card bg-base-100 shadow-md w-64 mx-2
                transform transition duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Poster */}
              <figure className="h-40 overflow-hidden">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Details */}
              <div className="card-body p-3">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {movie.title}
                </h3>

                <p className="text-xs text-base-content/70 mt-1">
                  {movie.genre && <span>{movie.genre}</span>}
                  {movie.releaseYear && (
                    <span className="ml-1">• {movie.releaseYear}</span>
                  )}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-1 text-[11px]">
                    <CalendarClock size={14} />
                    <span>Recently added</span>
                  </span>

                  <Link
                    to={`allmovies/moviedetails/${movie._id}`}
                    className="btn btn-xs btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentMovies;
