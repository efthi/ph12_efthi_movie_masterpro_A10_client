import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImage from '../../public/assets/img/errorImage.jpg';

const ErrorPage = () => {
    return (
        <>
        {/* <Navbar></Navbar> */}
        <div className='mx-auto flex justify-center'>
            <img className='w-[40%] h-[30%]' src={errorImage} alt="" />
        </div>

        {/* <Footer></Footer> */}
        </>
    );
};

export default ErrorPage;