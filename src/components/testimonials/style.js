import styled, { css } from 'styled-components';
import { Section } from '../section';

export const Description = styled.p`
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}rem;
      color: ${props.color};
      margin: ${props.margin ? props.margin : 'inherit'};
    `}
`;

export const Slider = styled(Section)`
  margin-bottom: 50px;

  .swiper-wrapper {
    margin-top: 50px;
  }

  .swiper-container {
    max-width: 980px;
    overflow: visible;
  }
`;

export const SliderItem = styled.div`
  max-width: 880px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.08);
  padding: 3rem;
  text-align: left;
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const GreenContainer = styled.div`
  background: ${({ theme }) => theme.global.colors.primary};
  border-radius: 10px 0 0 10px;
  bottom: 0;
  max-width: 40%;
  min-width: 0;
  left: 60%;
  padding: 45px 45px 45px;
  position: absolute;
  right: 0;
  top: 100px;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;

  * {
    margin: 0;
  }
`;

export const AuthorName = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fonts.base};
  font-weight: bold;
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
  margin-top: 2rem;

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
  margin-top: 2rem;

  img {
    width: 30px;
    height: 18px;
    margin-right: 50px;
    cursor: pointer;
  }
`;
