import React, { useEffect } from 'react';
import { useLocation } from 'react-router'

const MyCollection = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'My Collection | Movie Master Pro '
 }, []);
const location= useLocation();
console.log(location);

    return (
        <div>
            <p className="text-center m-10 border-2 border-[#80ff]">My Collection!!</p>
            <p>Now at: {location.pathname}</p>
        </div>
    );
};

export default MyCollection;