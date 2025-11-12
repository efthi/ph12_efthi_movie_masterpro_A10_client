import React, { useEffect, useState } from 'react';
import {Link, useLocation, useParams} from 'react-router';
import { Star, Drama , CalendarClock } from 'lucide-react';
import Spinner from '../Components/Spinner';
import Swal from "sweetalert2";

const MovieDetails = () => {

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

if (loading) return <span className="container mx-auto loading loading-bars loading-মদ ml-3"></span>;
if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
if (!movie) return <div className="p-6">No movie found</div>;

const handleDel = (id) => {

    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/moviedetails/${id}`, {
        method: "DELETE",         
      })
      .then((res) => res.json())
      .then(()=>{
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      })
      .catch((err) => console.log(err)
      )
      
    }
  });
   
}

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
                
              <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                <Link to='/mycollection' className='btn btn-secondary'>Wishlist</Link>
              </div>
            </div>
            <div className='flex flex-col gap-5 bg-base-100/80 p-5 rounded-box shadow-indigo-600 shadow-2xl'>
              <div className="flex gap-5 justify-center">
                <span><Star size={32} color="#00ff00" /> {movie.rating}</span>
                <span><Drama  size={32} color="#0080ff" /> {movie.genre}</span>
                <span><CalendarClock size={32} color="#ff0000" /> {movie.releaseYear}</span>
              </div>
              <span>Duration: {movie.duration}</span>
              <span>Language: {movie.language}</span>
              <span>Country: {movie.country}</span>
              <span className='code'>EIDR: {movie.eidr}</span>
              <span>Added by: {movie.addedBy}</span>
              <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                <Link to={`/editmovie/${movie._id}`} className='btn btn-info'>Edit</Link>
                <Link to='/allmovies' className='btn btn-accent'>Back</Link>
                <button onClick={()=>handleDel(movie._id)} className='btn btn-error'>Delete</button>
              </div>
            </div>
          </div>   
         </div>
        </>
    );
};

export default MovieDetails;