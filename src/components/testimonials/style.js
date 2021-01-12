import styled, { css } from 'styled-components';

export const Description = styled.p`
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}rem;
      color: ${props.color};
      margin: ${props.margin ? props.margin : 'inherit'};
    `}
`;

export const Slider = styled.div`
  width: 100%;
  padding: 60px 0 40px;
  margin: 50px 0;
  position: relative;

  .swiper-wrapper {
    margin-top: 100px;
  }

  @media (max-width: 767px) {
    margin-top: 100px;

    .swiper-wrapper {
      margin-top: 0;
    }
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
  margin: 10px 0;
`;

export const Title = styled.div`
  position: absolute;
  left: 0%;
  top: -50px;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
    top: -100px;
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

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
  padding: 0 3rem 0 1.5rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const GoogleReviews = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  p {
    margin: 0;

    u {
      cursor: pointer;
    }
  }
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;

  img {
    width: 30px;
    height: 18px;
    margin-right: 50px;
    cursor: pointer;
  }
`;
