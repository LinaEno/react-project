import styled from 'styled-components';

export const ContainerTotal = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const CurrencyStyled = styled.div`
  margin-top: 32px;
  min-width: 280px;
  height: auto;
  position: relative;
  margin: 0 auto;
  background: #4a56e2;
  border-radius: 30px;
  @media (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 336px;
    margin-right: 0;
    margin-top: 32px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    margin-left: 0;
  } ;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 24px;
  padding: 12px 20px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    /* gap: 40px; */
    padding: 17px 50px;
  } ;
`;

export const ListLI = styled.li`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: white;
`;
export const ImgStyledRectangle = styled.img`
  position: absolute;
  top: auto;
  left: auto;
  width: 100%;
  height: 50px;
  background: #ffffff;
  opacity: 0.2;
  border-radius: 30px 30px 0px 0px;
`;

export const ImgStyledVector = styled.img`
  position: absolute;
  bottom: 0px;
  left: auto;
  width: 100%;
  height: 93px;
  @media (min-width: 768px) {
    height: 119px;
  }
  @media (min-width: 1280px) {
  } ;
`;

export const TypeStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  margin-top: 12px;
  padding: 12px 20px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    align-items: center;
    gap: 24px;
  }
  li {
    display: flex;
    justify-content: space-between;
    /* gap: 70px; */
    width: 100%;
    height: 24px;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: calc(24 / 16);
    color: white;
    p {
      margin-left: 0;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1280px) {
      gap: 90px;
      justify-content: center;
      width: 100%;
    }
  }
`;
