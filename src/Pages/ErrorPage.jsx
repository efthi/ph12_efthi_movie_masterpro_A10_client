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
        
        <div className='container max-w-10/12 mx-auto flex flex-col gap-5 md:flex-row justify-center items-center'>
            <div className=''> 
              <code className='text-center font-extrabold text-2xl'>{message}</code>
              <a className='btn btn-primary' href="/">Back to Home</a>
            </div>
            <img className='w-[40%] h-[30%]' src={errorImage} alt="error image" />
        </div>

        {/* <Footer></Footer> */}
        </>
    );
};

export default ErrorPage;