import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgp1 from '../../assets/images/p1.png';
import imgp2 from '../../assets/images/p2.png';

const benefits = () => {
  return (
    <div className='landing-banner'>
      <Container>
        <p className='banner-details'>
          By joining Ring Savvy, you can save yourself from interruption. Focus
          on your work, let us take the calls.
        </p>
      </Container>
    </div>
  );
};
export default benefits;
