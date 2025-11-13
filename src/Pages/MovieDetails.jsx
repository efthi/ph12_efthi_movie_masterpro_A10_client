import React, { use, useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router';
import { Star, Drama , CalendarClock } from 'lucide-react';
import Spinner from '../Components/Spinner';
import Swal from "sweetalert2";
import { AuthContext } from '../Context/AuthContext';

const MovieDetails = () => {

  //Get the id from card.jsx
  const {id} = useParams();
  const navigate = useNavigate();
 
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true); //এটা fetch এর জন্য 
  const [error, setError] = useState("");

// wishlist এর জন্য extra state
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(false); // future এ API থেকে real data আনতে পারবে


  const {user} =use(AuthContext);

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

const handleAddToWishlist = () => {
  // ১) user লগিন না থাকলে
  if (!user) {
    Swal.fire({
      icon: 'info',
      title: 'Login required',
      text: 'Wishlist এ রাখতে আগে লগিন করো',
      showCancelButton: true,
      confirmButtonText: 'Go to Login',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
    return;
  }

  // ২) লোডিং শুরু
  setWishlistLoading(true);

  // ৩) Backend এ request পাঠাচ্ছি
  fetch('http://localhost:3000/wishlist/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      movieId: movie._id,
      email: user.email,
    }),
  })
    .then((res) => res.json()) // response → JSON
    .then((data) => {
      // ধরলাম backend থেকে আসবে: { success: true, status: 'added'/'removed' }

      if (!data.success) {
        // success না হলে error দেখাই
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Wishlist update failed',
        });
        return;
      }

      // ৪) UI state আপডেট
      setInWishlist(data.status === 'added');

      Swal.fire({
        icon: 'success',
        title:
          data.status === 'added'
            ? 'Added to Wishlist'
            : 'Removed from Wishlist',
        timer: 1200,
        showConfirmButton: false,
      });
    })
    .catch((err) => {
      // ৫) কোনো ভুল হলে এখানে আসবে
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      });
    })
    .finally(() => {
      // ৬) কাজ শেষ, লোডিং বন্ধ
      setWishlistLoading(false);
    });
};

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
                <button onClick={handleAddToWishlist}
                className="btn btn-secondary" disabled={wishlistLoading} >
                {wishlistLoading
                  ? 'Please wait...'
                  : inWishlist
                    ? 'Remove from Wishlist'
                    : 'Add to Wishlist'}
              </button>
                <Link to='/wishlist' className='btn btn-outline'>Wishlist</Link>
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
                <Link to='/allmovies' className='btn btn-accent'>Back</Link>
                {
                  (movie.addedBy === user.email ) ? ( 
                    <>
                    <Link to={`/editmovie/${movie._id}`} className='btn btn-info'>Edit</Link>
                     <button onClick={()=>handleDel(movie._id)} className='btn btn-error'>Delete</button>
                    </>
                     ) : <></>
                }
              </div>
            </div>
          </div>   
         </div>
        </>
    );
};

export default MovieDetails;