import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 12px;
    margin-top: 40px;
    margin-bottom: 28px;
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
`;

export const Text = styled(NavLink)`
  font-family: Poppins;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: #000;
  &:hover,
  &:focus,
  &:active {
    font-weight: 700px;
  }
`;
