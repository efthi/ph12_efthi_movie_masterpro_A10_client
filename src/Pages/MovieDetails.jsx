import React, { useEffect, useState } from 'react';
import {Link, useLocation, useParams} from 'react-router';
import { Star, Drama , CalendarClock } from 'lucide-react';
import useDataMan from '../hooks/useDataMan';
import axios  from 'axios';

const MovieDetails = () => {
  //Page Title
 useEffect(()=>{
    document.title = 'Movie Details | Movie Master Pro '
  }, []);

const {id} = useParams();
// const location = useLocation();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

useEffect(() => {
      fetch(`http://localhost:3000/moviedetails/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
}, [id])

console.log(movie._id);



    return (
        <>
         <div className="container mx-auto max-w-[90%] m-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <div className='shadow-indigo-600 shadow-2xl'>
              <img className='rounded-2xl' src={movie.posterUrl} alt={movie.title} />
            </div>
            <div className='flex flex-col gap-10 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
              <h3 className='font-semibold'>ID: {movie.id}</h3>
              <h2 className='font-bold text-3xl'>{movie.title}</h2>
              <h4 className='font-medium text-xl'>Summary: <span className="italic">{movie.plotSummary}</span></h4>
              <p>Director: {movie.director}</p>
              <p>Cast: {movie.cast}</p>
            </div>
            <div className='flex flex-col gap-5 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
              <div className="flex gap-5 justify-center">
                <span><Star size={32} color="#00ff00" /> {movie.rating}</span>
                <span><Drama  size={32} color="#0080ff" /> {movie.genre}</span>
                <span><CalendarClock size={32} color="#ff0000" /> {movie.releaseYear}</span>
              </div>
              <span>Duration: {movie.duration}</span>
              <span>Lang: {movie.language}</span>
              <span>Country: {movie.country}</span>
              <span className='code'>EIDR: {movie.eidr}</span>
              <span>Added by: {movie.addedBy}</span>
              <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                <Link to='/allmovies' className='btn btn-primary'>Add to collection</Link>
                <Link to='/allmovies' className='btn btn-secondary'>Wishlist</Link>
                <Link to='/allmovies' className='btn btn-accent'>Back</Link>
              </div>
            </div>
          </div>   
         </div>
        </>
    );
};

export default MovieDetails;