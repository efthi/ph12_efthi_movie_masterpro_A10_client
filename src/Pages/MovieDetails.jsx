import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router';
import { Star, Drama , CalendarClock } from 'lucide-react';

const MovieDetails = () => {
  //Page Title
  const title = useEffect(()=>{
    document.title = 'Movie Details | Movie Master Pro '
  }, []);

const location = useLocation();

const data =location.state;
console.log(data);



    return (
        <>
         <div className="container mx-auto max-w-[90%] m-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <div className='shadow-indigo-600 shadow-2xl'>
              <img className='rounded-2xl' src={data.posterUrl} alt={data.title} />
            </div>
            <div className='flex flex-col gap-10 bg-base-100/80 p-5 li rounded-box shadow-indigo-600 shadow-2xl'>
              <h3 className='font-semibold'>ID: {data.id}</h3>
              <h2 className='font-bold text-3xl'>{data.title}</h2>
              <h4 className='font-medium text-xl'>Summary: <span className="italic">{data.plotSummary}</span></h4>
              <p>Director: {data.director}</p>
              <p>Cast: {data.cast}</p>
            </div>
            <div className='flex flex-col gap-5 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
              <div className="flex gap-5 justify-center">
                <span><Star size={32} color="#00ff00" /> {data.rating}</span>
                <span><Drama  size={32} color="#0080ff" /> {data.genre}</span>
                <span><CalendarClock size={32} color="#ff0000" /> {data.releaseYear}</span>
              </div>
              <span>Duration: {data.duration}</span>
              <span>Lang: {data.language}</span>
              <span>Country: {data.country}</span>
              <span className='code'>EIDR: {data.eidr}</span>
              <span>Added by: {data.addedBy}</span>
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