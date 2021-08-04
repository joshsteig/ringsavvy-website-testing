import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgSrc from '../../assets/images/media.png';

const benefits = () => {
  return (
   <Container style={{borderTop:"1px solid #D5D5D5"}} fluid>
      <Container style={{ justifyContent: 'space-between',display:"flex" ,padding:"40px"}}>
      <div>
        <h3 className='footer-copyright '>© 2020 Ring Savvy, Inc.</h3>
      </div>
      <div>
        <img src={imgSrc} />
      </div>
    </Container>
   </Container>
  );
};

export default benefits;
