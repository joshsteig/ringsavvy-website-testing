const contentful = require('contentful');

const contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

export const client = contentful.createClient(contentfulConfig);
