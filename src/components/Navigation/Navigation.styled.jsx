import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 280px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 12px;
    margin-top: 40px;
    margin-bottom: 28px;
    width: 200px;
  }
`;

export const Nav = styled.nav`
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 0px;
  }
`;

export const NavItem = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Icon = styled.span`
  margin-right: 20px;
  margin-top: 4px;
`;

export const Text = styled(NavLink)`
  font-family: Poppins;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: #000;
  &:hover,
  &:focus {
    font-weight: 700;
  }
  &.active {
    font-weight: 700;
  }
`;
