import React from 'react';
import Banner from './Banner'
import AboutUs from './AboutUs'
import Tarifs from './Tariffs/Tariffs'
import Path from './Path'
import Gallery from './Gallery'
import Waiting from './Waiting'

function MainPage() {
  return (
    <div className="MainPage content">
      <Banner/>
      <AboutUs/>
      <Tarifs/>
      <Path/>
      <Gallery/>
      <Waiting/>
    </div>
  );
}

export default MainPage;
