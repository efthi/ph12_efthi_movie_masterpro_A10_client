import React from 'react';
import { Star, Drama , CalendarClock } from 'lucide-react';

const Card = ({movie}) => {
    return (
        <>
         <div className="card card-side bg-base-100 shadow-indigo-600 shadow-2xl">
            <figure>
                <img src={movie.posterUrl} alt={movie.title}  />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.plotSummary}</p>
                <div className="card-actions justify-between">
                <span><Star size={20} color="#00ff00" /> {movie.rating.toFixed(1)}</span>
                <span><Drama  size={20} color="#0080ff" /> {movie.genre}</span>
                <span><CalendarClock size={20} color="#ff0000" />{movie.releaseYear}</span>
                
                <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>   
        </>
    );
};

export default Card;