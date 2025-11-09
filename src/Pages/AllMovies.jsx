import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
import useDataMan from '../hooks/useDataman';
import ErrorPage from './ErrorPage';

const AllMovies = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'All Movies | Movie Master Pro '
 }, []);

 //Data আনা হলো
const{loading, err, movies} = useDataMan();

if(err) return <ErrorPage err={err}></ErrorPage>
  
let location = useLocation();
console.log(location);

        
    return (
        <>
        {loading ? (<Spinner></Spinner>) : (
            
        <div className='container mx-auto max-w-[90%] m-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            { movies.map(movie => (
                <Card key={movie.id} movie={movie}></Card>
            ))}
            </div>
        </div>
        )}
        </>
    );
};

export default AllMovies;