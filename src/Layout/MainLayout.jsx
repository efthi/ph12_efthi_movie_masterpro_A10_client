import React from 'react';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <Spinner></Spinner> */}
        <Footer></Footer>   
        </>
    );
};

export default MainLayout;