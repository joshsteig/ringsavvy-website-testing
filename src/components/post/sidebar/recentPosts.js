import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RecentPost from './recentPostItem';

import * as Styled from './style';

const RecentPosts = ({ data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <Styled.Section>
      <Styled.Title>Recent Posts</Styled.Title>
      <Styled.UnorderedList>
        {posts.map(({ node }) => {
          return <RecentPost key={node.contentful_id} post={node} />;
        })}
      </Styled.UnorderedList>
    </Styled.Section>
  );
};

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query RecentPosts {
          allContentfulPost(
            sort: { fields: [publishDate], order: DESC }
            limit: 4
          ) {
            edges {
              node {
                title
                contentful_id
                publishDate(formatString: "MMMM Do, YYYY")
                slug
              }
            }
          }
        }
      `}
      render={(data) => <RecentPosts data={data} />}
    />
  );
};
