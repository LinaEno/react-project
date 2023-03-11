import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 280px;
  height: 80px;
  padding: 8px 32px;
  background-color: #fff;
  border-radius: 30px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 8px 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Title = styled.p`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: uppercase;
  color: #a6a6a6;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: #000;
`;

export const Sign = styled.span`
  margin-right: 4px;
`;

export const Number = styled.span`
  font-family: 'Poppins';
  font-weight: 700;
`;
