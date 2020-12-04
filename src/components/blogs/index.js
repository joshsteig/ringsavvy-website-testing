import React from 'react';
import BlogCard from '../blogCard';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import { BlogsWrapper, Title } from './style';

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
        'https://www.ringsavvy.com/wp-content/uploads/2020/11/11-of-the-best-tools-for-landscapers-featured-img-01-300x146.jpg',
    },
    {
      title: '11 Of The Best Tools For Plumbers',

      image:
        'https://www.ringsavvy.com/wp-content/uploads/2020/11/11-of-the-best-tools-for-landscapers-featured-img-01-300x146.jpg',
    },
  ];
  
  return (
    <Wrapper>
      <GappedWrapper>
        <Title>
          For the latest marketing tips, trends, and news, check out our blog!
        </Title>
        <BlogsWrapper>
          {BlogsData.map((item) => (
            <BlogCard data={item} />
          ))}
        </BlogsWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Blogs;
