import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import Google from '../../assets/images/google-logo.svg';
import ArrowPrev from '../../assets/images/reviews-prev.svg';
import ArrowNext from '../../assets/images/reviews-next.svg';
import { Wrapper } from '../wrapper/style';
import {
  Description,
  ArrowsWrapper,
  Bottom,
  GoogleReviews,
  GreenContainer,
  HeadingWrapper,
  SliderItem,
  SliderWrapper,
  Title,
  WriterWrapper,
} from './style';

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const params = {
    slidesPerView: 1.1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 'auto',
      },
    },
    on: {
      init(e) {
        setSwiper(e);
        e.slideTo(1, 1000);
      },
    },
  };

  return (
    <SliderWrapper>
      <GreenContainer />
      <Wrapper>
        <HeadingWrapper>
          <Title>
            <h2> What our clients are saying </h2>
          </Title>
        </HeadingWrapper>
      </Wrapper>
      <Swiper {...params}>
        {[1, 2, 3].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SliderItem key={i}>
            <h3>Dont think twice about hiring Ring Savy, they are the one!</h3>
            <Description marginTop={1}>
              Great answering service! You don’t realize how many business calls
              your actually missing from not having this service! Ring savvy
              taking over my business calls allowed me to triple my new clients!
              They are very polite, professional and knowledgeable. I instantly
              receive my messages after missing the call.
            </Description>
            <WriterWrapper>
              <h4>Tood Brickhouse({item})</h4>
              <span>Brickhouse Design Group, ltd</span>
            </WriterWrapper>
          </SliderItem>
        ))}
      </Swiper>
      <Wrapper>
        <Bottom>
          <GoogleReviews>
            <img src={Google} alt='Google Logo' />
            <p>
              <strong>4.1/5 stars</strong> based on <u>27 Google reviews</u>
            </p>
          </GoogleReviews>
          <ArrowsWrapper>
            <img src={ArrowPrev} alt='Prev' onClick={() => swiper.slidePrev()} />
            <img src={ArrowNext} alt='Next' onClick={() => swiper.slideNext()} />
          </ArrowsWrapper>
        </Bottom>
      </Wrapper>
    </SliderWrapper>
  );
};

export default Testimonials;
