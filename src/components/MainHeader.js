import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../styles/colors';
import MediaQuery from '../styles/media-queries';

export const Branding = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 3rem;
  border-left: 1rem solid ${Colors.secondary};
  padding-left: 2rem;

  ${MediaQuery.medium`
    font-size: 1.5rem;
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem 1.5rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.gray};

  ${MediaQuery.medium`
    padding: 1rem 1rem 1rem 0;
  `}
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;

  a {
    color: ${Colors.black};
    padding: 1.5rem;
    text-transform: uppercase;
    &:hover {
      color: ${Colors.primary};
    }

    ${MediaQuery.medium`
      padding: 1rem;
  `}
  }
`;

const MainHeader = () => (
  <HeaderWrapper>
    <Branding>Elmwest</Branding>
    <nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to={'/'}>Shop</Link>
        </NavItem>
        <NavItem>
          <Link to={'/'}>Bedroom</Link>
        </NavItem>
      </NavList>
    </nav>
  </HeaderWrapper>
);

export default MainHeader;
