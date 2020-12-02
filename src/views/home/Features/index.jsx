import React from 'react';
import './index.scss';
const Features = () => {
  const Features = [
    {
      title: 'We’re always live, always professional',
      description:
        'You never know when a potentially significant customer will contact your business, and with our help, you can increase your lead capturing opportunities from 40 hours every week, to 168 hours! And no matter what hour of the day a call comes in, the quality of our service remains the same.',
      ctaText: 'Learn More',
    },
    {
      title: 'New customer intake tailored towards your business',
      description:
        'You never know when a potentially significant customer will contact your business, and with our help, you can increase your lead capturing opportunities from 40 hours every week, to 168 hours! And no matter what hour of the day a call comes in, the quality of our service remains the same.',
      ctaText: 'Learn More',
    },
    {
      title: 'Connect with Spanish speaking customers',
      description:
        'You never know when a potentially significant customer will contact your business, and with our help, you can increase your lead capturing opportunities from 40 hours every week, to 168 hours! And no matter what hour of the day a call comes in, the quality of our service remains the same.',
      ctaText: 'Learn More',
    },
    {
      title: 'Stay engaged with customers while on the go',
      description:
        'You never know when a potentially significant customer will contact your business, and with our help, you can increase your lead capturing opportunities from 40 hours every week, to 168 hours! And no matter what hour of the day a call comes in, the quality of our service remains the same.',
      ctaText: 'Learn More',
    },
  ];
  return (
    <div className=''>
      <div className='max-w-6xl mx-auto py-12 px-5'>
        <div className='w-full flex '>
          <div className='w-1/2 flex flex-col items-center'>
            {Features.map(({ title, description, ctaText }, index) => (
              <div className='py-8 px-6 text-white font-bold flex items-center feature-box mb-6 w-full'>
                <span className='text-2xl'>0{index + 1}</span>
                <h2 className='ml-4 text-2xl leading-tight'>{title}</h2>
              </div>
            ))}
          </div>
          <div className='w-1/2 flex flex-col justify-center px-16'>
            <div className='flex flex-col'>
              <h2 className='text-2xl leading-tight'>
                Stay engaged with customers while on the go
              </h2>
              <p className='mt-8'>
                Not only will our virtual receptionist team cover your phones
                while you’re away from the office, but we’ll pass along all
                customer messages to your mobile device via text and/or email
                message.
                <span className='mt-4 block'>
                  This will provide you with incredible peace of mind, as you’ll
                  always know when new customer opportunities arise.
                </span>
              </p>
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
