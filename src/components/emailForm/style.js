import styled from 'styled-components';
import Background from '../../assets/images/corporate-office-bg-overlay.jpg';

export const EmailCTA = styled.div`
  position: relative;
  flex-wrap: wrap;
  padding: 2.5rem 3rem;
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

  @media (max-width: 767px) {
    padding: 1rem 1rem;
  }
`;

export const HalfWrapper = styled.div`
  color: white;
  position: relative;
  width: 50%;

  h3 {
    margin: 0 0 0.5rem;
    color: white;
  }

  p {
    color: white;
    margin: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 100px;
  position: relative;
  background-color: white;
  padding: 0.5rem 0.75rem 0.5rem 1.5rem;

  @media (max-width: 767px) {
    padding: 0.5rem 1rem;

    button {
      padding: 0.75rem 2rem;
    }
  }
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
