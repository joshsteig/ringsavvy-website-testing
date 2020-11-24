import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RecentPost from './recentPostItem';

import { SectionTitle, UnorderedList } from './style';

const RecentPosts = ({ data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <div>
      <SectionTitle>Recent Posts</SectionTitle>
      <UnorderedList>
        {posts.map(({ node }) => {
          return <RecentPost key={node.contentful_id} post={node} />;
        })}
      </UnorderedList>
    </div>
  );
};

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query RecentPosts {
          allContentfulPost(limit: 4) {
            edges {
              node {
                title
                contentful_id
                createdAt(formatString: "MMMM Do, YYYY")
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
