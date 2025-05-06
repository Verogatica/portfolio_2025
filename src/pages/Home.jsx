import React from 'react';
import data from '../data/info.json'; // importa tu JSON
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <div>
      <Navbar/>
      <Gallery></Gallery>
    </div>
  );
}

export default Home;
