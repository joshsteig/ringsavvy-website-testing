import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgp1 from '../../assets/images/p1.png';
import imgp2 from '../../assets/images/p2.png';

const benefits = () => {
  return (
    <Container className='benefitsContainer'>
      <Row className='landing-reverse-col' >
        <Col style={{ textAlign: 'center' }} xs={12} lg={5}>
          <img
            className='benefits_image'
            style={{ width: '85%' }}
            src={imgp1}
          />
        </Col>
        <Col lg={1} />
        <Col xs={12} lg={6} style={{ margin: 'auto' }}>
          <h3 className='peoples_heading'>The industry-wide problem</h3>
          <p className='benefits_details'>
            Field Service workers have to stop what they’re doing in order to
            answer the phone. No one wants to take a call from a roof, a hot
            attic, or a crawlspace.
          </p>
        </Col>
      </Row>
      <Row style={{marginTop:"30px"}}>
        
        <Col xs={12} lg={6} style={{ margin: 'auto' }}>
          <h3 className='peoples_heading'>The Ring Savvy solution:</h3>
          <p className='benefits_details'>
            Ring Savvy enables you to focus on the task at hand, while not sacrificing customer service or losing out on new customers.
          </p>
        </Col>
        <Col lg={1} />
        
        <Col style={{ textAlign: 'center' }} xs={12} lg={5}>
          <img
            className='benefits_image'
            style={{ width: '85%' }}
            src={imgp2}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default benefits;
