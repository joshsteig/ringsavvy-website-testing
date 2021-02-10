import React, { useState } from 'react';
import useMeasure from '../../utils/useMeasure';
import { animated, useSpring } from 'react-spring';
import * as Styled from './style';
import { StyledLink } from '../button';

const PricingTable = ({ tableData }) => {
  const [isOpen, setOpen] = useState(false);

  const [bind, { height }] = useMeasure();
  const slide = useSpring({
    overflow: 'hidden',
    height: isOpen ? height : 0,
  });

  return (
    <>
      <Styled.Toggle onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
        {!isOpen ? 'View more plans' : 'View less plans'}
      </Styled.Toggle>
      <animated.div style={slide}>
        <Styled.Table {...bind}>
          <Styled.TableRow>
            <Styled.TableHead>Monthly Minute Plans</Styled.TableHead>
            <Styled.TableHead>Price</Styled.TableHead>
            <Styled.TableHead>&nbsp;</Styled.TableHead>
          </Styled.TableRow>
          {tableData.map((data, index) => (
            <Styled.TableRow key={index}>
              <Styled.TableCell>
                <strong>{data.minutes} minutes</strong>
              </Styled.TableCell>
              <Styled.TableCell>{data.price}</Styled.TableCell>
              <Styled.TableCell style={{ textAlign: 'right' }}>
                <StyledLink to='/sign-up' xs borderPrimary>
                  Try for free
                </StyledLink>
              </Styled.TableCell>
            </Styled.TableRow>
          ))}
        </Styled.Table>
      </animated.div>
    </>
  );
};

export default PricingTable;
