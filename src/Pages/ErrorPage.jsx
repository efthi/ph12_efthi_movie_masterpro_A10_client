import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImage from '../../public/assets/img/errorImage.jpg';

const ErrorPage = ({err}) => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'Error Page | Movie Master Pro '
 }, []);
    return (
        <>
        {/* <Navbar></Navbar> */}
        
        <div className='mx-auto flex justify-center'>
            <p className='text-center font-extrabold text-8xl'>{err}</p>
            <img className='w-[40%] h-[30%]' src={errorImage} alt="error image" />
        </div>

        {/* <Footer></Footer> */}
        </>
    );
};

export default ErrorPage;