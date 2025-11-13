// src/Components/TopRated.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Star } from 'lucide-react';

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/allmoviedata')
      .then((res) => res.json())
      .then((data) => {
        // rating কে নাম্বারে কনভার্ট করে sort করবো
        const toNumber = (r) =>
          typeof r === 'number' ? r : parseFloat(r) || 0;

        const sorted = [...data]
          .filter((m) => m.rating !== undefined && m.rating !== null)
          .sort((a, b) => toNumber(b.rating) - toNumber(a.rating));

        // Top 5
        setMovies(sorted.slice(0, 6));
      })
      .catch((err) => {
        console.error(err);
        setError('Top rated movie লোড করতে সমস্যা হয়েছে');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-4 text-center">Loading top rated...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">{error}</div>;
  }

  if (!movies.length) {
    return <div className="py-4 text-center">কোনো movie পাওয়া যায়নি</div>;
  }

  return (
    <div className="container mx-auto max-w-[90%] my-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated Movies</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie, index) => (
          <div
            key={movie._id}
            className="
              card bg-base-100 shadow-md
              transform transition duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <div className="card-body flex gap-4 items-center">
              {/* Poster */}
              <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg leading-snug">
                    {index + 1}. {movie.title}
                  </h3>

                  <span className="flex items-center gap-1 text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold text-sm text-base-content">
                      {movie.rating}
                    </span>
                  </span>
                </div>

                <p className="text-sm text-base-content/70 mt-1">
                  {movie.genre} {movie.releaseYear && `• ${movie.releaseYear}`}
                </p>

                <div className="mt-2">
                  <Link
                    to={`allmovies/moviedetails/${movie._id}`}
                    className="btn btn-xs btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
