import React from 'react';
import BlogCard from '../../../components/BlogCard';
import './index.scss';
const Blogs = ({ LeadData, horizontal = false }) => {
  const BlogsData = [
    {
      title:
        'Five Ways Ring Savvy’s Message Taking Service Can Simplify Your Holiday Season',

      image:
        'https://www.ringsavvy.com/wp-content/uploads/2020/11/five-ways-ring-savvys-message-taking-service-simplify-holiday-season-featured-img-300x146.jpg',
    },
    {
      title: '11 Of The Best Tools For Landscapers',

      image:
        'https://www.ringsavvy.com/wp-content/uploads/2020/11/five-ways-ring-savvys-message-taking-service-simplify-holiday-season-featured-img-300x146.jpg',
      overLay: {
        title: '11 Of The Best Tools For Landscapers',
      },
    },
    {
      title: '11 Of The Best Tools For Plumbers',

      image:
        'https://www.ringsavvy.com/wp-content/uploads/2020/11/five-ways-ring-savvys-message-taking-service-simplify-holiday-season-featured-img-300x146.jpg',
      overLay: {
        title: '11 Of The Best Tools For Plumbers',
      },
    },
  ];
  return (
    <div className=''>
      <div className='max-w-6xl mx-auto py-12 px-5'>
        <h2 className='text-5xl w-3/5'>
          For the latest marketing tips, trends, and news, check out our blog!
        </h2>
        <div className='grid grid-cols-3 grid-rows2 mt-12 gap-8'>
          {BlogsData.map((item) => (
            <div>
              <BlogCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
