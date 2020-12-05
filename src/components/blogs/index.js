import React from 'react';
import BlogCard from '../blogCard';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import { BlogsWrapper, Title } from './style';

const Blogs = ({ Blogs }) => { 
  return (
    <Wrapper>
      <GappedWrapper>
        <Title>
          For the latest marketing tips, trends, and news, check out our blog!
        </Title>
        <BlogsWrapper>
          {Blogs.map(({node}) => (
            <BlogCard data={node} />
          ))}
        </BlogsWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Blogs;
