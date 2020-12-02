import React from 'react';
import './index.scss';
const Hero = () => {
  return (
    <div className='hero-banner'>
      <div className='max-w-6xl mx-auto p-5 text-white relative'>
        <div className='w-full lg:w-3/5 pb-12'>
          <h1 className='text-white text-5xl'>
            Our Virtual receptionists help optimize the workflow of field
            service businesses
          </h1>
          <p className='text-white'>
            You’ve got enough on your plate already. Our 24/7 live receptionist
            service is ready to answer any phone calls you don’t have time for,
            take highly detailed customer messages and help build a highly
            organized dispatching system for your company.
          </p>
          <div className='flex my-8'>
            <button className='bg-green rounded-full py-4 px-12 font-bold'>
              Try free for 7 days
            </button>
            <button className=' rounded-full py-4 px-12 font-bold'>
              Get a custom quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
