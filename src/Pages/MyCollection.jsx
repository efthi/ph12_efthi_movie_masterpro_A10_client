import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ErrorPage from './ErrorPage';
import Spinner from '../Components/Spinner';
import Card from '../Components/Card';

const MyCollection = () => {
 //Page Title
useEffect(()=>{
   document.title = 'My Collection | Movie Master Pro '
 }, []);
// const location= useLocation();
// console.log(location);
const {user} =use(AuthContext);

const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

//fetching the data
  useEffect(()=>{
    setLoading(true);
    fetch(`http://localhost:3000/mycollectiondata?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
       .catch((err) => setError(err))
      .finally(() => setLoading(false));

  }, [user]);

if(error) return <ErrorPage err={error}></ErrorPage>
  //console.log('error:', error);
  

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

export default MyCollection;