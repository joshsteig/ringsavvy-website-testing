import React from 'react';
import BlogCard from '../blogCard';
import { Wrapper } from '../wrapper/style';
import { BlogsWrapper, BlogMain } from './style';

const Blogs = ({ Blogs }) => {
  return (
    <Wrapper>
      <BlogMain>
        <h2>
          For the latest marketing tips, trends, and news, check out our blog!
        </h2>
      </BlogMain>
      <BlogsWrapper>
        {Blogs.map(({ node }, index) => (
          <BlogCard data={node} key={index} />
        ))}
      </BlogsWrapper>
    </Wrapper>
  );
};

export default Blogs;
