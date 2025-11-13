import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Stats from '../Components/Stats';
import TopRated from '../Components/TopRated';
import RecentMovies from '../Components/RecentMovies/RecentMovies';
import AboutPlatform from '../Components/AboutPlatform';
import { useNavigation } from 'react-router';
import HeroSlider from '../Components/HeroSlider';
import MovieUserStats from '../Components/MovieUserStats';
import GenreSection from '../Components/GenresSection';

const Home = () => {
//Page Title
const title = useEffect(()=>{
  document.title = 'Home | Movie Master Pro '
}, []);

    return (
    <>
      <div className='w-full max-w-11/12 mx-auto my-8'>
      {/* <Slider></Slider> */}
      <HeroSlider></HeroSlider>
      <MovieUserStats></MovieUserStats>
      <TopRated></TopRated>
      <RecentMovies></RecentMovies>
      <GenreSection></GenreSection>
      <AboutPlatform></AboutPlatform>
      </div>
    </>
  )
}

export default Home;