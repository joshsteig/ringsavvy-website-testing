import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';

export default function Scholarships({ location }) {
  const heroData = {
    heading: 'Scholarships',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Scholarships - RingSavvy, Inc.</title>
        <meta
          name='description'
          content='Scholarships - Ring Savvy - Proud To Offer These Opportunities! Apply For Our Scholarship Today, and Good Luck to All Applicants!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent maxWidth='780px'>
        <p>
          The Ring Savvy Foundation is proud to offer scholarships to deserving
          students who complete applications for which they are eligible. In
          doing so, we get to give back to our local community, our entire
          country, and the types of businesses that give us the opportunity to
          serve them, and help them serve their customers.
        </p>

        <p>
          <strong>
            The Ring Savvy Foundation offers the following scholarships to
            eligible students:
          </strong>
        </p>

        <p>
          <a href='https://www.ringsavvy.com/scholarships/scholarship-for-long-island-students/'>
            Scholarship for Long Island Students ($1,000)
          </a>
        </p>

        <p>
          Ring Savvy’s Scholarship for Long Island Scholars is dedicated to
          finding and aiding merit based scholars who are from Long Island and
          attending school on Long Island as well.
        </p>

        <p>
          <a href='https://www.ringsavvy.com/scholarships/scholarship-for-young-entrepreneurs/'>
            Scholarship For Young Entrepreneurs ($1,000)
          </a>
        </p>

        <p>
          The Ring Savvy Foundation’s Scholarship For Young Entrepreneurs is a
          merit based scholarship in search of young people with a
          “self-starter” attitude and creative types who might not fit the
          traditional educational excellence mold.
        </p>

        <p>
          <a href='https://www.ringsavvy.com/scholarships/scholarship-for-trade-school-students/'>
            Scholarship for Trade School Students ($1,000)
          </a>
        </p>

        <p>
          Ring Savvy is proud to offer a scholarship to help young men and women
          pay for trade school and enjoy a promising career and future. This
          scholarship is merit based and seeks to help those who may not have
          chosen an academic career path but exemplify hard work, diligence, and
          perseverance through their trade school endeavors.
        </p>
      </SecondaryContent>
    </Layout>
  );
}
