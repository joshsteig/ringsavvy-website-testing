import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import Google from '../../assets/images/google-logo.svg';
import ArrowPrev from '../../assets/images/reviews-prev.svg';
import ArrowNext from '../../assets/images/reviews-next.svg';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

const Testimonials = ({ style }) => {
  const [swiper, setSwiper] = useState(null);
  const params = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlidesBounds: true,
    breakpoints: {
      768: {
        spaceBetween: 100,
        slidesPerView: 'auto',
      },
    },
    on: {
      init(e) {
        setSwiper(e);
      },
    },
  };

  const testimonials = [
    {
      heading:
        'Ring Savvy goes beyond what other answering services will offer.',
      review:
        'Excellent service which allows me to be with my clients or in meetings while Ring Savvy operators pick up and request information that is either texted or emailed to me within minutes. Their service is always reliable and the information allows me to do my follow up when I’m not available.',
      author: {
        name: 'Todd Brickhouse',
        title: 'Brickhouse Design Group, Ltd.',
      },
    },
    {
      heading: 'Don’t think twice about hiring Ring Savvy, they are the one!',
      review:
        'Great answering service! You don’t realize how many business calls your actually missing from not having this service! Ring savvy taking over my business calls allowed me to triple my new clients! They are very polite, professional and knowledgeable. I instantly receive my messages after missing the call.',
      author: {
        name: 'Kristy Castagna',
        title: 'Lawyer',
      },
    },
    {
      heading: 'Stress less about missing a call with Ring Savvy.',
      review:
        'We have been using Ring Savvy for the past 3 years, for our OT/PT clients. Ring Savvy is professional and trustworthy. When we can’t answer our calls I know everything is being handled and don’t stress about missing anything because all of our clients are treated well!',
      author: {
        name: 'Christine Engel',
        title: 'Physical Therapist',
      },
    },
  ];

  return (
    <Styled.Slider>
      <Styled.GreenContainer />
      <Wrapper>
        <h2 style={{ maxWidth: '480px' }}>What our clients are saying</h2>
      </Wrapper>
      <Swiper {...params}>
        {testimonials.map((testimonial, i) => (
          <Styled.SliderItem key={i}>
            <h4>{testimonial.heading}</h4>
            <Styled.Description marginTop={1}>
              {testimonial.review}
            </Styled.Description>
            <Styled.Author>
              <Styled.AuthorName>{testimonial.author.name}</Styled.AuthorName>
              <p>{testimonial.author.title}</p>
            </Styled.Author>
          </Styled.SliderItem>
        ))}
      </Swiper>
      <Wrapper>
        <Styled.Bottom>
          {/* TODO: Pull review data from Google API */}
          <Styled.GoogleReviews>
            <img src={Google} alt='Google Logo' />
            <p>
              <strong>4.5/5 stars</strong> based on 79 Google reviews
            </p>
          </Styled.GoogleReviews>
          <Styled.ArrowsWrapper>
            <img
              src={ArrowPrev}
              alt='Prev'
              onClick={() => swiper.slidePrev()}
            />
            <img
              src={ArrowNext}
              alt='Next'
              onClick={() => swiper.slideNext()}
            />
          </Styled.ArrowsWrapper>
        </Styled.Bottom>
      </Wrapper>
    </Styled.Slider>
  );
};

export default Testimonials;
