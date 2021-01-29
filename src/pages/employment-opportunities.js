import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SecondaryContent from '../components/secondaryContent';

export default function EmploymentOpportunities({ location }) {
  const heroData = {
    heading: 'Employment Opportunities',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Employment Opportunities - Ring Savvy - Apply For A Position Here
        </title>
        <meta
          name='description'
          content='Employment Opportunities - Ring Savvy - Apply For A Position Here - Join Our Team and Be a Part of the Best Answering Service!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent maxWidth='780px'>
        <h2>Start your career with an answering service industry leader!</h2>

        <p>
          Those seeking full time employment at Ring Savvy/Answering Legal have
          the opportunity to gain experience as a receptionist. Our
          receptionists answer calls as if they were in that particular
          business’ office, and are that business’ “personal” receptionist, just
          for that call. Our call center operates 24 hours a day, 7 days a week,
          365 days a year, and our corporate location is in Nesconset, NY.
        </p>

        <p>
          Our full time shifts are typically 35-40 hours per week, depending on
          the call center’s needs. Receptionists do not work less than 20 hours
          per week. We of course, accommodate the timing and scheduling needs of
          our receptionists, however we do ask for flexibility in return. Having
          an open schedule and determining the available shift hours you can
          work does not guarantee an applicant a position, however flexibility
          in the schedule will of course increase the propensity that an
          applicant receives a position.
        </p>

        <p>
          These positions offer great starting pay and room for advancement
          within the company, and almost all of our higher-ups came from the
          receptionist position.
        </p>

        <p>
          You must have a typing speed of 50 words per minute. If you do not
          know your typing speed, please visit{' '}
          <a href='https://www.typingtest.com/' rel='nofollow'>
            www.typingtest.com
          </a>{' '}
          to see how you do.
        </p>

        <p>
          If you’re interested in a receptionist position with Ring
          Savvy/Answering Legal, please feel free to give us a call at the
          number below.
        </p>

        <h2>631-400-8888</h2>

        <h3>Career</h3>

        <ul>
          <li>Promote from within</li>
          <li>Telephone Operator</li>
          <li>Senior Telephone Operator</li>
          <li>Supervisor</li>
          <li>Customer Solution Specialist</li>
          <li>Back Office Specialist</li>
          <li>Sales Assistant</li>
          <li>Web Content Writer</li>
          <li>Web Designer</li>
          <li>Cold Caller</li>
          <li>Salesman</li>
        </ul>

        <h3>Workplace</h3>

        <ul>
          <li>Annual Holiday Party</li>
          <li>Birthday Gift card</li>
          <li>Employees of the Month (cash bonus)</li>
          <li>Set Schedules</li>
          <li>Perfect Attendance Bonus</li>
          <li>Bagel Fridays</li>
          <li>Discounted Gym Membership (New York Sports Club)</li>
          <li>Multicultural Day</li>
          <li>Themed Attire Days (last friday of every month)</li>
          <li>Pocketbook and Jewelry Parties</li>
          <li>
            Secure facility with keyless entry door swipes and 24/7 CCTV
            monitoring
          </li>
        </ul>

        <h3>Benefits</h3>

        <ul>
          <li>
            Health/Prescription/Dental/Life/Vision/Supplemental insurances:
            Disability, Hospital, Accident, Cancer
          </li>
          <li>Paid time off (PTO)</li>
          <li>
            2 weeks paid leave after 90 day probationary period and up to 3rd
            year.
          </li>
          <li>3 weeks paid leave after 3 – 5 years</li>
          <li>4 weeks paid leave after 5 plus years</li>
        </ul>
      </SecondaryContent>
    </Layout>
  );
}
