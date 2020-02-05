import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';

const FooterWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <Text>© 2020 Elmwest. All Rights Reserved.</Text>
    <Text>
      <a href="/">Terms and Conditions</a> | <a href="/">Privacy Policy</a> |{' '}
      <a href="/">Legal Statement</a>
    </Text>
  </FooterWrapper>
);

export default Footer;
