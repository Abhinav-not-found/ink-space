import React from 'react'
import LandingCard from './LandingCard';
import LandingCard2 from './LandingCard2';

const LandingSection = () => {
  const commonStyle = "w-full bg-red-50 rounded-xl";
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-y-6 gap-x-6 py-20">
      <div className={`${commonStyle} h-64 row-span-2 col-span-2`}>
        <LandingCard img={''} title={"wake up and smell the coffee"} />
      </div>
      <div className={`${commonStyle} h-full row-span-3`}>
        <LandingCard2 title={"the brand new nasa office"} />
      </div>
      <div className={`${commonStyle} h-full row-span-3`}>
        <LandingCard2 title={'Experience the Saharan sands'}/>
      </div>
      <div className={`${commonStyle} h-full row-span-12`}>
        <LandingCard2 title={'9 Air cleaning plants your home needs'}/>
      </div>
      <div className={`${commonStyle} h-full row-span-12`}>
        <LandingCard2 title={'one month sugar detox'}/>
      </div>
      <div className={`${commonStyle} h-64 row-span-11 col-span-2`}>
        <LandingCard title={"shooting minimal instagram photos"} />
      </div>
    </div>
  )
}

export default LandingSection
