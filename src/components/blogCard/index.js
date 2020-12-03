import React from 'react';
import './style.scss';

const BlogCard = ({ data }) => {
  return (
    <div className='blog-card-wrapper w-full'>
      <div className='w-full flex flex-col'>
        <div
          className={`image-wrapper ${data.overLay ? 'overlay' : ''}`}
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <h2 className='text-xl mt-8'>{data.title}</h2>
      </div>
    </div>
  );
};

export default BlogCard;
