import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

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
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;
