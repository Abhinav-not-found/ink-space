import React from 'react'
import LandingCard from './LandingCard';
import LandingCard2 from './LandingCard2';

const LandingSection = () => {
  const commonStyle = "w-full bg-red-50 rounded-xl";
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-y-6 gap-x-6 py-20 bg-white dark:bg-black">
      <div className={`${commonStyle} h-64 row-span-2 col-span-2`}>
        <LandingCard img={'/pictures/coffee-shot.avif'} title={"wake up and smell the coffee"} category={'lifestyle'} textColor={'text-white'}/>
      </div>
      <div className={`${commonStyle} h-full row-span-3`}>
        <LandingCard2 img={'/pictures/building.avif'} title={"the brand new nasa office"} textColor={'text-white'} category={'news'} />
      </div>
      <div className={`${commonStyle} h-full row-span-3`}>
        <LandingCard2 img={'/pictures/saharaSands2.avif'} category={'travel'} title={'Experience the Saharan sands'} textColor={'text-white'} />
      </div>
      <div className={`${commonStyle} h-full row-span-12`}>
        <LandingCard2 img={'/pictures/plants2.avif'} title={'9 Air cleaning plants your home needs'} category={'plant'} textColor={'text-white'}/>
      </div>
      <div className={`${commonStyle} h-full row-span-12`}>
        <LandingCard2 img={'/pictures/sugar.avif'} title={'one month sugar detox'} textColor={'text-white'} category={'health'}/>
      </div>
      <div className={`${commonStyle} h-64 row-span-11 col-span-2`}>
        <LandingCard img={'/pictures/photography.avif'} title={"shooting minimal instagram photos"} category={'photography'} />
      </div>
    </div>
  )
}

export default LandingSection
