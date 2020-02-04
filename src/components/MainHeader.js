import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../styles/colors';

const Branding = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 3rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.gray};
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
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
  }
`;

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <Branding>Elmwest</Branding>
      <Nav>
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
          <NavItem>
            <Link to={'/'}>Kitchen</Link>
          </NavItem>
          <NavItem>
            <Link to={'/'}>Bathroom</Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default MainHeader;