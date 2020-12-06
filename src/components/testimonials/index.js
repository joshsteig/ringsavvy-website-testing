import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import Heading from '../heading/style';
import ArrowPrev from '../../assets/images/reviews-prev.svg';
import Google from '../../assets/images/google-logo.svg'
import ArrowNext from '../../assets/images/reviews-next.svg'
import { Wrapper } from '../wrapper/style';
import { Description } from '../leadSection/style';
import {
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
  const [swiper,setSwiper] = useState(null)
  const params = {
    spaceBetween: 40,
    slidesPerView: 'auto',
    centeredSlides: true,
    on: {
      init: function (e) {
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
            <Heading level={2}> What our clients are saying </Heading>
          </Title>
        </HeadingWrapper>
      </Wrapper>
      <Swiper {...params}>
        {[1, 2, 3, 4].map((item) => (
          <SliderItem>
            <Heading level={3}>
              Dont think twice about hiring Ring Savy, they are the one!
            </Heading>
            <Description marginTop={1}>
              Great answering service! You don’t realize how many business calls
              your actually missing from not having this service! Ring savvy
              taking over my business calls allowed me to triple my new clients!
              They are very polite, professional and knowledgeable. I instantly
              receive my messages after missing the call.
            </Description>
            <WriterWrapper>
              <Heading level={3}>Tood Brickhouse</Heading>
              <span>Brickhouse Design Group, ltd</span>
            </WriterWrapper>
          </SliderItem>
        ))}
      </Swiper>
      <Wrapper>
        <Bottom>
          <GoogleReviews>
            <img src={Google}/>
            <p><strong>4.1/5 stars</strong> based on <u>27 Google reviews</u></p>
          </GoogleReviews>
          <ArrowsWrapper>
            <img onClick={()=>swiper.slidePrev()} src={ArrowPrev}/>
            <img onClick={()=>swiper.slideNext()} src={ArrowNext}/>
          </ArrowsWrapper>
        </Bottom>
      </Wrapper>
    </SliderWrapper>
  );
};

export default Testimonials;
