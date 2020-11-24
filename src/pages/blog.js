import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import { Wrapper } from '../components/wrapper/style';

export default function BlogIndex(props) {
  const posts = get(props, 'data.allContentfulPost.edges');
  const { location } = props;

  return (
    <Layout location={location}>
      <Helmet>
        <title>Blog - Ring Savvy, Inc. - Answering Service Innovators</title>
        <meta
          name='description'
          content='Ring Savvy - Answering Service Innovators! Serving Industries and Small Businesses - Unparalleled Customer Service and Support - Call Now To Try It Free!'
        />
      </Helmet>
      <Wrapper>
        <h2>Recent articles</h2>
        <ul className='article-list'>
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <PostPreview article={node} />
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          createdAt(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
