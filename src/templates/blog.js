import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import PostPreview from '../components/postPreview/index';
import Pagination from '../components/pagination';
import { Wrapper } from '../components/wrapper/style';
import { PostPreviewList } from '../components/postPreviewList/style';

export default function BlogIndex({ pageContext, data, location }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '' : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const posts = data.allContentfulPost.edges;

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
        <h2>Blog</h2>
        <PostPreviewList>
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <PostPreview post={node} />
              </li>
            );
          })}
        </PostPreviewList>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid(maxWidth: 470, quality: 70) {
              ...GatsbyContentfulFluid
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
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
