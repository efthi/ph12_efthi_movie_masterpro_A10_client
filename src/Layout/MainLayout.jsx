import React from 'react';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';

const MainLayout = () => {
 
const navigation = useNavigation();
console.log(navigation.state);

    return (
        <>
        <Navbar></Navbar>
        {navigation.state === 'loading' ? <Spinner /> : (<Outlet></Outlet>) }
        {/* <Spinner></Spinner> */}
        <Footer></Footer>   
        </>
    );
};

export default MainLayout;