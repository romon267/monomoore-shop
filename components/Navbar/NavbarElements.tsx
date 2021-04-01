import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  /* background: #f1faee; */
  background: #fff;
  border-bottom: 2px solid #f09aa1;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.a`
  color: #e63746;
  /* height: 100%; */
  padding-bottom: 5px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) and (max-height: 900px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLink = styled.a`
  color: #e63946;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #EB5C68;
  };

  &:active {
    color: #E42535;
  }
`;

export const NavLinkS = styled(LinkS)`
  color: #e63946;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #EB5C68;
  };

  &:active {
    color: #E42535;
  }
`;
