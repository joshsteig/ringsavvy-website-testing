const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/post.js');
    resolve(
      graphql(`
        {
          allContentfulPost {
            edges {
              node {
                title
                slug
                category {
                  contentful_id
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create pages for pagination on the blog
        const posts = result.data.allContentfulPost.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          });
        });

        // create pages for each individual post
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              category: post.node.category,
              slug: post.node.slug,
            },
          });
        });

        // TODO: create pages for blog categories
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /postscribe/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
