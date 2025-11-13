// src/Pages/Home/GenreSection.jsx (ইচ্ছে হলে অন্য ফোল্ডারেও রাখতে পারো)

import React from 'react';
import { Link } from 'react-router';

const genres = [
  {
    name: 'Action',
    description: 'High-paced movies with fights, chases and explosions.',
  },
  {
    name: 'Drama',
    description: 'Emotion-driven stories with strong characters and conflicts.',
  },
  {
    name: 'Comedy',
    description: 'Light-hearted movies full of fun, jokes and laughter.',
  },
  {
    name: 'Thriller',
    description: 'Suspenseful stories that keep you on the edge of your seat.',
  },
  {
    name: 'Sci-Fi',
    description: 'Futuristic worlds, technology and mind-bending ideas.',
  },
  {
    name: 'Romance',
    description: 'Love stories with heartwarming and emotional moments.',
  },
];

const GenreSection = () => {
  return (
    <section className="container mx-auto max-w-[90%] my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Browse by Genre
      </h2>
      <p className="text-center opacity-70 mb-6 text-sm font-bold md:text-base">
        Explore movies from different genres like Action, Drama, Comedy and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="bg-base-200 rounded-box border border-base-300 shadow-indigo-600 shadow-md p-4 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold">{genre.name}</h3>
            <p className="text-sm opacity-80">{genre.description}</p>
            <div className="mt-2">
              {/* চাইলে এটার লিংক পরে ফিল্টার করে দিবে */}
              <Link
                to="/allmovies"
                className="btn btn-xs btn-outline btn-accent"
              >
                View {genre.name} Movies
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;
