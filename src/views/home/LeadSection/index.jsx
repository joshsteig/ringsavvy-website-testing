import React from 'react';
import './index.scss';
const LeadSection = ({ LeadData, horizontal = false }) => {
  const { title, description } = LeadData;
  return (
    <div className=''>
      <div className='max-w-6xl mx-auto pt-24 pb-12 px-5'>
        <div className={`w-full flex ${!horizontal ? 'flex-col' : ''}`}>
          <div className='w-1/2'>
            <h2 className='text-5xl '>{title}</h2>
          </div>
          <div className='w-1/2 ml-auto'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSection;
