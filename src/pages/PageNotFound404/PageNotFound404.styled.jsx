import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  margin-top: 50px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 700px;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: #24cca7;
  border-radius: 18px;
  color: rgba(255, 255, 255, 1);
  border: none;
  display: block;
  margin: 0 auto;
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 1);
    color: #24cca7;
  }
`;

export const Container404 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  border-top: 1px solid #54635a;
`;
