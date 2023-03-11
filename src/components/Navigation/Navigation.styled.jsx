import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  margin-bottom: 12px;
  display: flex;
  gap: 30px;
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
  padding-top: 12px;
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 0px;
    padding-top: 0;
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
  font-family: 'Circe', sans-serif;
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

export const NewsIcon = styled.span`
  display: block;
  width: 38px;
  height: 38px;
  background-color: #6E78E8;
  border-radius: 5px;
  text-align: center;
  padding-top: 7px;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    padding-top: 1.5px;
    border-radius: 3px;
    margin-right: 20px;
  }
`;
