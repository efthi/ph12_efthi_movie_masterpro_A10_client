import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImage from '../../public/assets/img/errorImage.jpg';
import { useRouteError , isRouteErrorResponse } from 'react-router';

const ErrorPage = () => {
 //Page Title
 const title = useEffect(()=>{
   document.title = 'Error Page | Movie Master Pro '
 }, []);

const err = useRouteError();
const message =
  err?.response?.data?.message ||
  err?.message ||
  err?.statusText ||
  "Something went wrong";;


 return (
        <>
        {/* <Navbar></Navbar> */}
        
        <div className='mx-auto flex flex-col md:flex-row justify-center items-center'>
            <p className='text-center font-extrabold text-4xl'>{message}</p>
            <img className='w-[40%] h-[30%]' src={errorImage} alt="error image" />
        </div>

        {/* <Footer></Footer> */}
        </>
    );
};

export default ErrorPage;