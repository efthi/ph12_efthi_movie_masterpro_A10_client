import React, { useEffect } from 'react';

const MyCollection = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'My Collection | Movie Master Pro '
 }, []);

    return (
        <div>
            <p className="text-center m-10 border-2 border-[#80ff]">My Colection!!</p>
        </div>
    );
};

export default MyCollection;