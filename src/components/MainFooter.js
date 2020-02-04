import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2020 Elmwest. All Rights Reserved.</p>
      <p>
        <a href="/">Terms and Conditions</a> | <a href="/">Privacy Policy</a> |{' '}
        <a href="/">Legal Statement</a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
