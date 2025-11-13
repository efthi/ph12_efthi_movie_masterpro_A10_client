import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const HeroSlider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState('');

  useEffect(() => {
    // Backend থেকে সব মুভি আনব
    fetch('http://localhost:3000/allmoviedata')
      .then((res) => res.json())
      .then((data) => {
        // data = সব মুভি, আমরা শুধু প্রথম ৭টা নিলাম
        const firstSeven = data.slice(0, 7);
        setMovies(firstSeven);
      })
      .catch((err) => {
        console.log(err);
        setError('Movie লোড করতে সমস্যা হয়েছে');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <span className="loading loading-infinity loading-md text-success"></span>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!movies.length) {
    return <div className="text-center py-10">কোনো movie পাওয়া যায়নি</div>;
  }

  return (
    <div className="carousel w-full max-w-5xl mx-auto rounded-box mb-10">
      {movies.map((movie, index) => {
        const prevIndex = (index - 1 + movies.length) % movies.length; // আগের স্লাইড
        const nextIndex = (index + 1) % movies.length;                 // পরের স্লাইড

        return (
          <div
            key={movie._id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            {/* Poster Image */}
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            {/* নিচে টাইটেল / genre overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              {movie.genre && <p className="text-sm">{movie.genre}</p>}
              <div className="mt-2">
                <Link
                  to={`/moviedetails/${movie._id}`}
                  className="btn btn-sm btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Left / Right Arrow */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${prevIndex}`} className="btn btn-circle">❮</a>
              <a href={`#slide${nextIndex}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroSlider;
