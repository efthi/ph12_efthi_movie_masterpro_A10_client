import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
import useDataMan from '../hooks/useDataMan';
import ErrorPage from './ErrorPage';

const AllMovies = () => {
  // Page Title
  useEffect(() => {
    document.title = 'All Movies | Movie Master Pro ';
  }, []);

  // সব মুভি useDataMan দিয়ে
  const { loading, err, movies } = useDataMan();

  // filter করা ডেটা আলাদা state-এ
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [filterLoading, setFilterLoading] = useState(false);

  // Filter form state
  const [genre, setGenre] = useState('');
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');

  // 🔍 Filter API call (useDataMan ছাড়া)
  const fetchFilteredMovies = async () => {
    try {
      setFilterLoading(true);

      const params = new URLSearchParams();

      if (genre) {
        params.append('genres', genre);
      }

      if (minRating !== '') {
        params.append('minRating', minRating);
      }

      if (maxRating !== '') {
        params.append('maxRating', maxRating);
      }

      const queryString = params.toString();
      const url = queryString
        ? `http://localhost:3000/movies?${queryString}`
        : `http://localhost:3000/movies`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch filtered movies');
      }

      const data = await res.json();
      setFilteredMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setFilterLoading(false);
    }
  };

  // Filter button
  const handleApplyFilters = (e) => {
    e.preventDefault();
    fetchFilteredMovies();
  };

  // Reset button → আবার useDataMan-এর ডেটা দেখাবে
  const handleReset = () => {
    setGenre('');
    setMinRating('');
    setMaxRating('');
    setFilteredMovies(null);
  };

  // ❗ সব হুকের পরে একটাই err check
  if (err) {
    return <ErrorPage err={err} />;
  }

  const isLoading = loading || filterLoading;

  // কোন ডেটা দেখাবো? filter থাকলে filteredMovies, নইলে useDataMan-এর movies
  const displayMovies = filteredMovies ?? movies;

  return (
    <>
      {/* Filter Form */}
      <form
        onSubmit={handleApplyFilters}
        className="mb-6 flex flex-wrap gap-4 items-center justify-center bg-base-200 p-4"
      >
        {/* Genre */}
        <div>
          <label className="inline text-sm font-medium mb-1">
            Genre 
          </label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">All</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Crime">Crime</option>
            <option value="Animation">Animation</option>
            <option value="War">War</option>
            <option value="Adventure">Adventure</option>
            <option value="Musical">Musical</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
          </select>
        </div>

        {/* Min Rating */}
        <div>
          <label className="inline text-sm font-medium mb-1">
            Min Rating 
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="border rounded px-3 py-2 w-24"
            placeholder="e.g. 8"
          />
        </div>

        {/* Max Rating */}
        <div>
          <label className="inline text-sm font-medium mb-1">
            Max Rating: 
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={maxRating}
            onChange={(e) => setMaxRating(e.target.value)}
            className="border rounded px-3 py-2 w-24"
            placeholder="e.g. 9"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Apply Filter
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Movies List */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto max-w-[90%] m-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllMovies;
