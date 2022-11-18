import React from 'react'
import Header from './Screens/SplitScreens/Header'
import Banner from './Screens/SplitScreens/Banner';
import CourseCard from './Screens/SplitScreens/CourseCard';
import StudentsMain from './Screens/SplitScreens/StudentsMain';
import Footer from './Screens/SplitScreens/Footer';

function HomeScreen() {
  return (
      <>
        <Header/>
        <Banner/>
        <CourseCard/>
        <StudentsMain/>
        <Footer/>
      </>
    )
}

export default HomeScreen