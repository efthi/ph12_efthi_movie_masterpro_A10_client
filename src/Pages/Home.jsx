import React from 'react';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Stats from '../Components/Stats';
import TopRated from '../Components/TopRated';
import RecentMovies from '../Components/RecentMovies';
import AboutPlatform from '../Components/AboutPlatform';

const Home = () => {
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