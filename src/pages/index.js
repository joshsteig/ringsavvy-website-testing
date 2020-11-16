import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export default function RootIndex(props) {
  const { location } = props;

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Best Quality 24/7 Live Answering Service and Virtual Receptionists
        </title>
        <meta
          name="description"
          content="Ring Savvy | 24/7 Live Answering Service | Serving All Industries as a Quality Extension of Your Business | Try For Free! Fully Bilingual."
        />
      </Helmet>
      <div>Home</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
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
