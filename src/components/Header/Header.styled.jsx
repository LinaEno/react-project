import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 80px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 15px;
  color: #000000;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  line-height: calc(45 / 30);

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #bdbdbd;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const Delimiter = styled.span`
  display: block;
  width: 1px;
  height: 30px;
  background-color: #bdbdbd;
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
