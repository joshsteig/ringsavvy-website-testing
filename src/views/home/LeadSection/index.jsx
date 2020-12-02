import React from 'react';
import './index.scss';
const LeadSection = () => {
  return (
    <div className=''>
      <div className='max-w-6xl mx-auto pt-24 pb-12 px-5'>
        <div className='w-full flex flex-col '>
          <div className='w-1/2'>
            <h2 className='text-5xl '>
              Why businesses trust Ring Savvy for their lead capturing needs
            </h2>
          </div>
          <div className='w-1/2 ml-auto'>
            <p>
              Our virtual receptionist team is U.S. based, and we’ll never
              outsource your calls. All our staff is local to our call center
              located in Long Island, New York. We know that your business isn’t
              just concerned about answering calls quickly, but also providing
              customers with a pleasant and enjoyable phone call experience.
              Ring Savvy takes the time to get to know and carefully train all
              of our virtual receptionists. We can say with confidence that
              we’re providing the very best people to engage with your
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSection;
