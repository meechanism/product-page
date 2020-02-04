import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

const Body = styled.main`
  max-width: 960px;
  margin: 2rem auto;
  min-height: 50vh;
  padding: 0 2rem;
`;

export default ({ children }) => (
  <>
    <GlobalStyles />
    <MainHeader />
    <Body>{children}</Body>
    <MainFooter />
  </>
);
