import LandingFooter from '@/components/LandingFooter';
import LandingHero from '@/components/LandingHero';
import LandingSection from '@/components/LandingSection';
import LandingSection2 from '@/components/LandingSection2';
import React from 'react'

const page = () => {
  return (
    <>
      <LandingHero/>
      <LandingSection/>
      <LandingSection2/>
      <LandingFooter/>
    </>
  );
};

export default page
