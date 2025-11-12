import React, { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router'

import { AuthContext } from '../Context/AuthContext';

const MyCollection = () => {
 //Page Title
useEffect(()=>{
   document.title = 'My Collection | Movie Master Pro '
 }, []);
// const location= useLocation();
// console.log(location);
const {user} =use(AuthContext);

//fetching the data
  useEffect(()=>{
    //setLoading(true);
    fetch(`http://localhost:3000/mycollectiondata?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
    //   .catch((err) => setError(err))
    //   .finally(() => setLoading(false));

  }, [user]);

  const [movie, setMovie] = useState([]);

  console.log(user.email);

  

    return (
        <div>
            <p className="text-center m-10 border-2 border-[#80ff]">My Collection!!</p>
            <p>Now at: {location.pathname}</p>
        </div>
    );
};

export default MyCollection;