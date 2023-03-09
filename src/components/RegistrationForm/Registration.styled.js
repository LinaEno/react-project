import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RegisterSection = styled.section`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 38px;
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  gap: 40px;
  margin: 0 auto 50px auto;
  padding-right: 50px;
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 28px;
    padding: 150px 0 52px 90px;
  }
`;

export const Title = styled.h1`
  /* font-family: 'Poppins'; */
  font-size: 30px;
  line-height: calc(45 / 30);
  color: #000;
`;

export const Backdrop = styled.div`
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    padding: 52px 90px 52px 107px;
    margin-right: auto;
  }
`;

export const Content = styled.div`
  padding: 32px 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 0 60px 0;
    border-radius: 20px;
    background-color: #fff;
    height: 616px;
    width: 533px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 0;
  }
`;

export const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;
export const LogoBox = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Link = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: calc(45 / 30);
  }
`;

export const Label = styled.label`
  position: relative;
  height: 32px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  padding-bottom: 10px;
  fill: #bdbdbd;
`;

export const Eye = styled.i`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
`;

export const Input = styled.input`
  height: 32px;
  padding-left: 54px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: #000;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #5e5e5e;
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #4a56e2;
    color: #4a56e2;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 280px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  color: #4a56e2;
  background-color: #fff;
  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    border: 1px solid #4a56e2;
    background-color: #4a56e2;
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ButtonActive = styled.button`
  height: 50px;
  width: 280px;
  border-radius: 20px;
  background-color: #24cca7;
  border: 1px solid #24cca7;
  color: #fff;
  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    border: 1px solid #4a56e2;
    background-color: #4a56e2;
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #4a56e2;
  &:hover {
    color: #fff;
  }
`;

export const Error = styled.div`
  text-transform: capitalize;
  color: red;
  position: absolute;
`;
