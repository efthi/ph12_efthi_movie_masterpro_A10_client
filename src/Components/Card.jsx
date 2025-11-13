import React, { use } from 'react';
import { Star, Drama , CalendarClock } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Card = ({movie}) => {
    
return (
        <>
         <div className="card card-side bg-base-100 shadow-indigo-600 shadow-2xl">
            <figure>
                <img src={movie.posterUrl} alt={movie.title}  />
            </figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.plotSummary}</p>
                <div className="card-actions justify-between">
                <span><Star size={20} color="#00ff00" /> {movie.rating}</span>
                <span><Drama  size={20} color="#0080ff" /> {movie.genre}</span>
                <span><CalendarClock size={20} color="#ff0000" />{movie.releaseYear}</span>
                
                </div>
                {/* <Link to={`${movie.id}`} className="btn btn-primary btn-sm">Details</Link> */}
                <Link state={movie} to={`moviedetails/${movie._id}`} className="btn btn-primary btn-sm">Details</Link>
            </div>
        </div>   
        </>
    );
};

export default Card;