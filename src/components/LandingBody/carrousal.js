import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import arrow from '../../assets/images/arrow.png';
import Modal from '../modal';

const benefits = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewComment, setReviewComment] = useState('');
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api.reviews.io/merchant/latest?store=ring-savvy&apikey=9e7cd5031384c35c723c6d723aa915eb'
      );
      const { reviews } = await response.json();
      setReviewsData(reviews);
    })();
  }, []);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (reviewsData.length > 0) {
      setReviewComment(reviewsData[currentFeedback].comments);
    }
  }, [reviewsData, currentFeedback]);

  function convertHTMLEntity(text) {
    const span = document.createElement('span');

    return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
      span.innerHTML = entity;
      return span.innerText;
    });
  }

  const handleNext = () => {
    if (currentFeedback !== reviewsData.length - 1) {
      setCurrentFeedback((prevState) => (prevState += 1));
    }
  };
  console.log(reviewComment.length);

  return (
    <Container>
      <Modal show={showModal} closeModal={closeModal}>
        <div style={{ width: '90%' }}>
          {reviewsData.length > 0 &&
            convertHTMLEntity(reviewsData[currentFeedback].comments)}
        </div>
      </Modal>
      <div className='feedback-bg'>
        <div className='qouteDiv'>
          {reviewsData.length > 0 && (
            <>
              <h2 className='feedback-name'>
                {reviewsData[currentFeedback].reviewer.first_name}
              </h2>
              <div
                className='Stars'
                style={{ '--rating': reviewsData[currentFeedback].rating }}
              ></div>
              <div className='feedback-comment'>
                <p
                  className={`feeback-details ${
                    reviewComment.length > 80 && 'ellipse'
                  }`}
                >
                  {convertHTMLEntity(reviewsData[currentFeedback].comments)}
                </p>
                {reviewComment.length >= 80 && (
                  <button
                    className='readMore-Button'
                    onClick={() => setShowModal(true)}
                  >
                    Read more
                  </button>
                )}
              </div>
              <div>
                <img
                  className={`feeback-arrow-left ${
                    currentFeedback == 0 && 'arrow_not_active'
                  }`}
                  src={arrow}
                  onClick={() =>
                    currentFeedback !== 0 &&
                    setCurrentFeedback(currentFeedback - 1)
                  }
                />
                <img
                  className={`feeback-arrow-right 
                  ${
                    currentFeedback === +reviewsData.length - 1 &&
                    'arrow_not_active'
                  }`}
                  onClick={handleNext}
                  src={arrow}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default benefits;
