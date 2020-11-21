import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';

import PostLayout from '../components/post/layout';
import Article from '../components/post/article';
import Sidebar from '../components/post/sidebar';
import { Wrapper } from '../components/wrapper/style';

export default function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <PostLayout location={post.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <Wrapper display='flex'>
        <Article post={post} />
        <Sidebar />
      </Wrapper>
    </PostLayout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author {
        name
      }
      category {
        name
        contentful_id
      }
      createdAt(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          ... on ContentfulPost {
            contentful_id
            title
            featuredImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
            slug
            author {
              name
            }
          }
        }
      }
    }
  }
`;
