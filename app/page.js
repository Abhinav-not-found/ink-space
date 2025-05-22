'use client'
import LandingFooter from '@/components/LandingFooter';
import LandingHero from '@/components/LandingHero';
import LandingSection from '@/components/LandingSection';
import LandingSection2 from '@/components/LandingSection2';
import React  from 'react'
import useRedirectIfLoggedIn from './hooks/useRedirectIfLoggedIn';

const page = () => {
  useRedirectIfLoggedIn()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow z-10">
        <LandingHero />
        <LandingSection />
        <LandingSection2 />
      </div>
      <LandingFooter />
    </div>
  );
};

export default page
