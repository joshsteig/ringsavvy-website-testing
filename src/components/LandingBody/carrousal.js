import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgSrc from '../../assets/images/u1.png';
import imgSrc2 from '../../assets/images/u2.png';
import arrow from '../../assets/images/arrow.png';

const benefits = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  console.log(currentFeedback);
  let data = [
    {
      img: imgSrc,
      name:"Rebeka Smith",
      details: `  Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s`,
    },
    {
      img: imgSrc2,
      name:"Paul Walker",
      details: `  Lorem Ipsum 2 is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text 2
      ever since the 100s`,
    },
  ];
  return (
    <Container>
      <div className='feedback-bg'>
        <div className='qouteDiv'>
          <div className='feedbackImgDiv'>
            <img src={data[currentFeedback].img} height='77' width='77' />
          </div>
          <h2 className='feedback-name'>{data[currentFeedback].name}</h2>
          <p className='feeback-details'>
           {data[currentFeedback].details}
          </p>
          <div>
            <img
              className={`feeback-arrow-left ${
                currentFeedback == 0 && 'arrow_not_active'
              }`}
              src={arrow}
              onClick={() =>
                currentFeedback == 1 && setCurrentFeedback(currentFeedback - 1)
              }
            />
            <img
              className={`feeback-arrow-right ${
                currentFeedback == 1 && 'arrow_not_active'
              }`}
              onClick={() =>
                currentFeedback == 0 && setCurrentFeedback(currentFeedback + 1)
              }
              src={arrow}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default benefits;
