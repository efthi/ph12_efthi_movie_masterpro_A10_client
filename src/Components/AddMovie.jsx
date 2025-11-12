import React, { use, useEffect, useState } from 'react';
import {Link} from 'react-router';
import Spinner from '../Components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';


const AddMovie = () => {
const {user} = use(AuthContext)
const nopreview_image = 'https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png';
const [posterUrl, setPosterUrl] = useState(nopreview_image);
const [title, setTitle] = useState('Add Movie')



//Page title 
useEffect(()=>{
    document.title = (title && title.trim()) //এটা আমি হুদাই বোঝার জন্য / concept ক্লিয়ারের জন্য করেছি :P
  ? `${title.trim()} | Add a Movie`
  : 'Add a Movie';
}, [title]); 


const addMovieData = (e) => {
     e.preventDefault();
    const id = e.target.idname.value;
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
    const addedBy = user.email;
    // === timestamps ===
    const now = new Date();                  // ব্রাউজারের বর্তমান সময়
    const addedAt = now.toISOString();       // UTC ISO e.g. "2025-11-09T15:00:00.000Z"
    const addedAtMs = now.getTime();         // epoch ms e.g. 1762700400000

    // লোকাল (Asia/Dhaka) YYYY-MM-DD
    const dateAddedLocal = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(now)
    
    const newMovie = {
    id,
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
    addedBy,
    addedAt,
    addedAtMs,
    dateAddedLocal,
  };
  fetch('http://localhost:3000/addmovie', {
    method:"POST",
    headers: { 'content-type' : 'application/json'},
    body: JSON.stringify(newMovie),
  })
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId){
            toast.success(`${title} Added to Database`);
            e.target.reset();
            setPosterUrl(nopreview_image);
        }
        
    })
    console.log(newMovie);
    
  
} 




return (
        <>
         <div className="container mx-auto max-w-[90%] m-10 ">
            <form onSubmit={addMovieData} >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    <div className='shadow-indigo-600 shadow-2xl'>
                    <img className='rounded-2xl' src={posterUrl} alt='' />
                    </div>
                    <div className='flex flex-col gap-2 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
                    <h3 className='font-semibold'>Add Movie:</h3>
                        <label htmlFor="idnam">ID: </label>
                        <input className="input" type="text" name="idname" />
                        <label htmlFor="title">Title: </label>
                        <input className="input" type="text" name="title" onChange={(e)=> setTitle(e.target.value)} />
                        <label htmlFor="plotSummary">Summary: </label>
                        <textarea placeholder="Summary" className="textarea textarea-primary" name="plotSummary" ></textarea><br />
                        <label htmlFor="director">Director: </label>
                        <input className="input" type="text" name="director" />  
                        <label htmlFor="cast">Cast: </label>
                        <input className="input" type="text" name="cast"/>  
                        <label htmlFor="rating">Rating: </label>
                        <input className="input" type="number" step="0.1" min="0" max="10" name="rating"  />
                        <label htmlFor="industry">Industry: </label>
                        <input className="input" type="text" name="industry"  />  
                    </div>
                    <div className='flex flex-col gap-2 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
                    <div className="flex gap-2 justify-center">
                        
                        <label htmlFor="genre">Genre: </label>
                        <input className="input" type="text" name="genre"  />
                        <label htmlFor="releaseYear">Release Year: </label>
                        <input className="input" type="number" name="releaseYear"  />
                    </div>
                    <label htmlFor="duration">Duration: </label>
                        <input className="input" type="number" name="duration"  /> 
                    <label htmlFor="language">Language: </label>
                        <input className="input" type="text" name="language"  /> 
                    <label htmlFor="country">Country: </label>
                        <input className="input" type="text" name="country"  /> 
                    <label htmlFor="eidr">EIDR: </label>
                        <input className="input" type="text" name="eidr"  /> 
                        <label htmlFor="posterUrl">Poster Image: </label>
                        <input className="input" type="text" name="posterUrl" onChange={(e) => setPosterUrl(e.target.value)}
            placeholder="https://example.com/photo.jpg"  /> 
                        <label htmlFor="bannerUrl">Banner Image: </label>
                        <input className="input" type="text" name="bannerUrl"  /> 
                        <label htmlFor="addedBy">Added by: </label>
                        <input className="input" type="text" name="addedBy" defaultValue={user.email} readOnly disabled  /> 
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <input type="submit" className='btn btn-success' value="Save" />
                        <Link to={`/allmovies/moviedetails/`} className='btn btn-accent'>Back</Link>
                    </div>
                    </div>
                </div>   
            </form>
            <ToastContainer></ToastContainer>
         </div>
        </>
    );
};

export default AddMovie;