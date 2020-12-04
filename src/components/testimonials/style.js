import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 2rem 0;
  position: relative;
  .swiper-wrapper {
    margin: 120px 20px;
  }
`;

export const SliderItem = styled.div`
  min-height: 300px;
  max-width: 880px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.08);
  padding: 3rem;
  text-align: left;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: #222;
`;

export const Title = styled.h2`
  color: #222;
  font-size: 3rem;
  padding: 0 1.5rem;
  position: absolute;
  left: 0%;
  top: -50px;
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
    top: 0;
    font-size: 2rem;
  }
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const GreenContainer = styled.div`
  background: #0abe51;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 10px 0 0 10px;
  bottom: 0;
  max-width: 40%;
  min-width: 0;
  left: 60%;
`;
