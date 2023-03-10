import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderComponent = styled.header`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 16px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000000;
`;
export const LogoTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5px;
`;

export const UserBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;
export const UserName = styled.p`
  /* font-family: 'Circe'; */
  font-size: 18px;
  color: #bdbdbd;
`;

export const Delimiter = styled.span`
  display: block;
  height: 30px;
  background-color: #bdbdbd;
  border: 1px solid #bdbdbd;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  gap: 12px;
  & img {
    width: 45px;
    height: 45px;
    background: url(.png);
    border-radius: 3px;
  }
`;
