import React from 'react';
import styled from 'styled-components';

import Colors from '../styles/colors';
import MediaQuery from '../styles/media-queries';

const sharedStyles = `
  position: absolute;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 2px solid black;
  border-right: 2px solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;

  &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-40%,-60%) rotate(45deg);
      width: 200%;
      height: 200%;
  }
`;

export const IconLeft = styled.i`
  ${sharedStyles}
  left: 0.75rem;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
`;

export const IconRight = styled.i`
  ${sharedStyles}
  right: 0.75rem;
  transform: translate3d(0, -50%, 0) rotate(45deg);
`;

export const ArrowContainer = styled.a`
  opacity: 0.75;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  padding: 1rem 0.5rem;
  ${(props) => (props.right ? 'right: 1rem' : null)};
  margin: 0;
  width: 3vmin;
  height: 3vmin;
  background: white;
  color: black;
  &:hover,
  &:focus {
    opacity: 1;
    color: ${Colors.primary};
    i {
      border-color: ${Colors.primary};
    }
  }

  ${MediaQuery.small`
    ${(props) => (props.right ? 'right: 0' : null)};
  `}
`;

export const ArrowLeft = ({ onClick }) => (
  <ArrowContainer href="" onClick={onClick}>
    <IconLeft />
  </ArrowContainer>
);

export const ArrowRight = ({ onClick }) => (
  <ArrowContainer href="" right onClick={onClick}>
    <IconRight />
  </ArrowContainer>
);
