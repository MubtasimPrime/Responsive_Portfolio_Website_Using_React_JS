import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCart from '../components/PricingCart';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCart />
      <Footer />
    </div>
  )
};

export default Project;
