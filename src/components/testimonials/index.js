import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Description } from '../leadSection/style';
import { Wrapper } from '../wrapper/style';
import {
  GreenContainer,
  Heading,
  HeadingWrapper,
  SliderItem,
  SliderWrapper,
  Title,
} from './style';

const Testimonials = () => {
  return (
    <SliderWrapper>
      <GreenContainer></GreenContainer>
      <Wrapper>
        <HeadingWrapper>
          <Title>What our clients are saying</Title>
        </HeadingWrapper>
      </Wrapper>
      <Carousel
        showIndicators={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        showThumbs={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={50}
      >
        {[1, 2, 3, 4].map((item) => (
          <SliderItem>
            <Heading>
              Dont think twice about hiring Ring Savy, they are the one!
            </Heading>
            <Description marginTop={1}>
              Great answering service! You don’t realize how many business calls
              your actually missing from not having this service! Ring savvy
              taking over my business calls allowed me to triple my new clients!
              They are very polite, professional and knowledgeable. I instantly
              receive my messages after missing the call.
            </Description>
          </SliderItem>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default Testimonials;
