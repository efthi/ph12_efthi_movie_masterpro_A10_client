import React, { useEffect } from 'react';

const MovieDetails = () => {
  //Page Title
  const title = useEffect(()=>{
    document.title = 'Movie Details | Movie Master Pro '
  }, []);

    return (
        <>
         <div className="grid grid-cols-3">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Title: </h2>
              <h4>Summary: </h4>
              <p>Director: </p>
              <p>Cast: </p>
            </div>
            <div>
              <span>Year: </span>
              <span>Genre: </span>
              <span>Rating: </span>
              <span>Duration: </span>
              <span>Lang: </span>
              <span>Country: </span>
              <span>EIDR: </span>
              <span>Added by: </span>
            </div>

          </div>   
        </>
    );
};

export default MovieDetails;