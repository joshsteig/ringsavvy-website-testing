import React from 'react';
import BlogCard from '../blogCard';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import { BlogsWrapper, BlogMain } from './style';

const Blogs = ({ Blogs }) => {
  return (
    <Wrapper>
      <GappedWrapper>
        <BlogMain>
          <h2>
            For the latest marketing tips, trends, and news, check out our blog!
          </h2>
        </BlogMain>
        <BlogsWrapper>
          {Blogs.map(({ node }) => (
            <BlogCard data={node} />
          ))}
        </BlogsWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Blogs;
