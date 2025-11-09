import React, { useEffect } from 'react';

const Wishlist = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'Wishlist | Movie Master Pro '
 }, []);
    return (
        <div>
            <p className="text-center m-10 border-2 border-y-pink-500">Wish List</p>
        </div>
    );
};

export default Wishlist;