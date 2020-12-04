import styled, { css } from 'styled-components';
import Background from '../../assets/images/corporate-office-bg-overlay.jpg';

export const ContentWrapper = styled.div`
  width: 66.66%;
  margin: auto;
`;

export const Content = styled.div`
  margin: 2rem 0;
`;

export const BannerWrapper = styled.div`
  position: relative;
`;

export const BannerOverLay = styled.div`
  margin-top: 3rem;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  background-image: url(${Background});
  &::before {
    border-radius: 5px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(39, 39, 39, 0.86);
  }
`;

export const LeftWrapper = styled.div`
  color: white;
  position: relative;
  width: 50%;
`;

export const RightWrapper = styled(LeftWrapper)``;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 100px;
  position: relative;
  background-color: white;
  padding: 0.5rem 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
