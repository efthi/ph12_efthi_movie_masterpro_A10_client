import React, { useEffect } from 'react';

const MovieDetails = () => {
  //Page Title
  const title = useEffect(()=>{
    document.title = 'Movie Details | Movie Master Pro '
  }, []);

    return (
        <div>
            <p className="text-center m-10 border-2 border-green-700">Movie Details!!</p>
        </div>
    );
};

export default MovieDetails;