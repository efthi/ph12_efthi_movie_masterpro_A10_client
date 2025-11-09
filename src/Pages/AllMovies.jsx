import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';

const AllMovies = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'All Movies | Movie Master Pro '
 }, []);

    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null)
    useEffect(()=>{
        setLoading(true);
        fetch('../../public/assets/data/hollywood.json')
            .then(res=>res.json())
            .then(data=>setMovieData(data))
            .catch(err=>setErr(err))
            .finally(()=> setLoading(false))
              
    }, []);

    let location = useLocation();
        console.log(location);
        
    return (
        <>
        {loading ? (<Spinner></Spinner>) : (
            
        <div className='container mx-auto max-w-[90%] m-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            { movieData.map(movie => (
                <Card key={movie.id} movie={movie}></Card>
            ))}
            </div>
        </div>
        )}
       
        </>
    );
};

export default AllMovies;