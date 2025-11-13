// src/Components/MovieUserStats.jsx
import React, { useEffect, useState } from 'react';

const MovieUserStats = () => {
  const [stats, setStats] = useState({
    totalMovies: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats({
            totalMovies: data.totalMovies,
            totalUsers: data.totalUsers,
          });
        } else {
          setError(data.message || 'Something went wrong');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Server error');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-4 text-center">Loading stats...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* দুই ভাগ: বামে stats, ডানে search bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        
        {/* বাম পাশ: Total Movies + Total Users */}
        <div className="md:w-1/2">
          <div className="stats shadow bg-base-100 w-full">
            <div className="stat">
              <div className="stat-title">Total Movies</div>
              <div className="stat-value text-primary">{stats.totalMovies}</div>
              <div className="stat-desc">Movies in database</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value text-secondary">{stats.totalUsers}</div>
              <div className="stat-desc">Registered users</div>
            </div>
          </div>
        </div>

        {/* ডান পাশ: Search Bar (UI only) */}
        <div className="md:w-1/2">
          <div className="card bg-base-100 shadow h-full">
            <div className="card-body">
              <div className="form-control mt-3">
                <div className="input-group flex flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Search movies…"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieUserStats;
