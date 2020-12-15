import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './style';

const PostPreview = ({ post }) => {
  const { title, description, featuredImage, slug } = post;

  return (
    <Styled.PostContainer>
      <Link to={`/blog/${post.slug}`}>
        <Styled.PostThumbnail alt={title} fluid={featuredImage.fluid} />
      </Link>

      <Styled.PostLink style={{ textDecoration: 'none' }} to={`/blog/${slug}`}>
        {title}
      </Styled.PostLink>

      <p
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />

      <Styled.MoreLink to={`/blog/${slug}`}>Continue Reading →</Styled.MoreLink>
    </Styled.PostContainer>
  );
};

export default PostPreview;
