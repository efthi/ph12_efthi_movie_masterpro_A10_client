import React, { useEffect, useState } from 'react';
import {Link, useLocation, useParams} from 'react-router';
import { Star, Drama , CalendarClock } from 'lucide-react';
import Spinner from '../Components/Spinner';
import { ToastContainer, toast } from 'react-toastify';


const EditMovie = () => {
     //Get the id from card.jsx
  const {id} = useParams();
 
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true); //এটা fetch এর জন্য 
  const [error, setError] = useState("");

 //fetching the data
  useEffect(()=>{
    setLoading(true);
    fetch(`http://localhost:3000/moviedetails/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

  }, [id]);

// const location = useLocation();
  
//Page title  
document.title = `${movie.title} | Movie Master Pro`;

console.log(movie._id);

const handleEditMovieData = (e) => {
     e.preventDefault();
    const title = e.target.title?.value; 
    const plotSummary = e.target.plotSummary.value;
    const director = e.target.director.value;
    const cast = e.target.cast.value;
    const industry = e.target.industry.value;
    const rating = e.target.rating.value;
    const genre = e.target.genre.value;
    const releaseYear = e.target.releaseYear.value;
    const duration = e.target.duration.value;
    const language = e.target.language.value;
    const country = e.target.country.value;
    const eidr = e.target.eidr.value;
    const posterUrl = e.target.posterUrl.value;
    const bannerUrl = e.target.bannerUrl.value;
    
    const payload = {
    title,
    plotSummary,
    director,
    cast,
    industry,
    rating,
    genre,
    releaseYear,
    duration,
    language,
    country,
    eidr,
    posterUrl,
    bannerUrl,
  };

  fetch(`http://localhost:3000/editmoviedetails/${movie._id}`, {
    method: "PATCH",
    headers: { 'content-type' : 'application/json'},
    body:JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(data => {
     console.log('after update', data);
    
        if(data.modifiedCount){
            toast.success(`Movie: ${movie.title} is updated!`)
            setTimeout(()=>{
            window.location.assign(`/allmovies/moviedetails/${movie._id}`);
            }, 5000);
        }
        else {
            toast.error('Update failed')
        }
        })
        .catch(err => {
            console.error(err);
            toast.error(`Error: ${err.message}`);
        })
} 




return (
        <>
         <div className="container mx-auto max-w-[90%] m-10 ">
            <form onSubmit={handleEditMovieData} >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    <div className='shadow-indigo-600 shadow-2xl'>
                    <img className='rounded-2xl' src={movie.posterUrl} alt={movie.title} />
                    </div>
                    <div className='flex flex-col gap-2 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
                    <h3 className='font-semibold'>ID: {movie.id}</h3>
                        <label htmlFor="title">Title: </label>
                        <input className="input" type="text" name="title" defaultValue={movie.title} />
                        <label htmlFor="plotSummary">Summary: </label>
                        <textarea placeholder="Summary" className="textarea textarea-primary" name="plotSummary" defaultValue={movie.plotSummary}></textarea><br />
                        <label htmlFor="director">Director: </label>
                        <input className="input" type="text" name="director" defaultValue={movie.director} />  
                        <label htmlFor="cast">Cast: </label>
                        <input className="input" type="text" name="cast" defaultValue={movie.cast} />  
                        <label htmlFor="rating">Rating: </label>
                        <input className="input" type="number" step="0.1" min="0" max="10" name="rating" defaultValue={movie.rating} />
                        <label htmlFor="industry">Industry: </label>
                        <input className="input" type="text" name="industry" defaultValue={movie.industry} />  
                    </div>
                    <div className='flex flex-col gap-2 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
                    <div className="flex gap-2 justify-center">
                        
                        <label htmlFor="genre">Genre: </label>
                        <input className="input" type="text" name="genre" defaultValue={movie.genre} />
                        <label htmlFor="releaseYear">Release Year: </label>
                        <input className="input" type="number" name="releaseYear" defaultValue={movie.releaseYear} />
                    </div>
                    <label htmlFor="duration">Duration: </label>
                        <input className="input" type="number" name="duration" defaultValue={movie.duration} /> 
                    <label htmlFor="language">Language: </label>
                        <input className="input" type="text" name="language" defaultValue={movie.language} /> 
                    <label htmlFor="country">Country: </label>
                        <input className="input" type="text" name="country" defaultValue={movie.country} /> 
                    <label htmlFor="eidr">EIDR: </label>
                        <input className="input" type="text" name="eidr" defaultValue={movie.eidr} /> 
                        <label htmlFor="posterUrl">Poster Image: </label>
                        <input className="input" type="text" name="posterUrl" defaultValue={movie.posterUrl} /> 
                        <label htmlFor="bannerUrl">Banner Image: </label>
                        <input className="input" type="text" name="bannerUrl" defaultValue={movie.bannerUrl} /> 
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <input type="submit" className='btn btn-success' value="Save" />
                        <Link to={`/allmovies/moviedetails/${id}`} className='btn btn-accent'>Back</Link>
                    </div>
                    </div>
                </div>   
            </form>
            <ToastContainer></ToastContainer>
         </div>
        </>
    );
};

export default EditMovie;