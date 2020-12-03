import React from 'react';
import './index.scss';
const MarketingCompaign = () => {
  return (
    <div className=''>
      <div className='max-w-6xl mx-auto py-12 px-5 '>
        <div className='w-8/12 mx-auto '>
          <h2 className='text-5xl'>
            A great marketing campaign can only take your business so far
          </h2>
          <div className='mt-8'>
            <p>
              If you’re unable to capture all the new leads your advertising
              generates, growing your business will be close to impossible.
              Modern consumers are growing increasingly impatient, and simply
              don’t have a desire to deal with voicemail anymore. So in essence,
              every call you fail to provide a live answer for, could be a
              potential missed new customer.
            </p>
            <p className='mt-4'>
              You’ll be amazed the impact a live human voice can make on your
              customers. By giving callers a real knowledgeable person to
              interact with on their first call to your business, you’re showing
              them right away that you actually care. You only get to make a
              first impression once, and Ring Savvy will make sure it’s a great
              one.
            </p>
          </div>
        </div>
        <div className='relative'>
          <div className='mt-12 visit-banner px-12 py-8 flex items-center'>
            <div className='w-1/2 text-white relative'>
              <h2 className='text-3xl text-white leading-tight'>
                Want to revisit this later?
              </h2>
              <p className='text-white mt-2'>
                Let us send you our company brochure.
              </p>
            </div>
            <div className='w-1/2 relative'>
              <div className='flex justify-between rounded-full relative bg-white px-5 py-2'>
                <input
                  className='w-full'
                  type='email'
                  placeholder='Email Address'
                />
                <button className='text-white bg-green rounded-full py-2 px-8 font-bold'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCompaign;
