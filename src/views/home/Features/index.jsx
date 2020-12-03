import React, { useState } from 'react';
import './index.scss';
const Features = ({ FeaturesData }) => {
  const [currentTab, setTab] = useState(0);

  return (
    <div className=''>
      <div className='max-w-6xl mx-auto py-12 px-5'>
        <div className='w-full flex '>
          <div className='w-1/2 flex flex-col items-center'>
            {FeaturesData.map(({ title }, index) => (
              <div
                onClick={() => {
                  setTab(index);
                }}
                className={`py-8 px-6 text-white font-bold flex items-center feature-box mb-6 w-full ${
                  index === currentTab ? 'active' : ''
                }`}
              >
                <span className='text-2xl'>0{index + 1}</span>
                <h2 className='ml-4 text-2xl leading-tight'>{title}</h2>
              </div>
            ))}
          </div>
          <div className='w-1/2 flex flex-col justify-center px-16'>
            <div className='flex flex-col'>
              <h2 className='text-2xl leading-tight'>
                {FeaturesData[currentTab].title}
              </h2>
              <div
                className='feature-description mt-8'
                dangerouslySetInnerHTML={{
                  __html: FeaturesData[currentTab].description,
                }}
              ></div>
              <button className='w-1/2 rounded-full py-3 px-12  font-bold bg-green mt-8 text-white'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
