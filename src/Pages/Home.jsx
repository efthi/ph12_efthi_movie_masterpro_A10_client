import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Stats from '../Components/Stats';
import TopRated from '../Components/TopRated';
import RecentMovies from '../Components/RecentMovies';
import AboutPlatform from '../Components/AboutPlatform';
import { useNavigation } from 'react-router';

const Home = () => {
//Page Title
const title = useEffect(()=>{
  document.title = 'Home | Movie Master Pro '
}, []);

    return (
    <>
      <Slider></Slider>
      <Stats></Stats>
      <TopRated></TopRated>
      <RecentMovies></RecentMovies>
      <AboutPlatform></AboutPlatform>
    </>
  )
}

export default Home;