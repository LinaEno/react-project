import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginSection = styled.section`
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 38px;
    padding-bottom: 0px;
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 60px auto 50px auto;
  padding-right: 50px;
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 28px;
    padding: 0 0 0 76px;
    margin: 150px auto 50px auto;
    justify-content: flex-start;
  }
`;

export const IconSvg = styled.img`
  @media screen and (min-width: 768px) {
    width: 260;
    height: 250;
    transform-origin: 50% 0;
    animation: leaves 6s ease-in-out infinite alternate;
    @keyframes leaves {
      0% {
        transform: scale(1);
        -webkit-transform: scale(0.9);
      }
      100% {
        transform: scale(2);
        -webkit-transform: scale(1);
      }
    }
  }
  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 420px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: #4a56e2;
`;

export const Backdrop = styled.div`
  @media screen and (min-width: 1280px) {
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    padding: 136px 90px 116px 107px;
    margin-right: auto;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 107px 20px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 40px 0 60px 0;
    border-radius: 20px;
    background-color: #fff;
    height: 468px;
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

// export const Link = styled.h2`
//   font-weight: 700;
//   font-size: 24px;
//   line-height: calc(30 / 24);
//   color: #000;
//   @media screen and (min-width: 768px) {
//     font-size: 30px;
//     line-height: calc(45 / 30);
//   }
// `;

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
  color: red;
  position: absolute;
`;
