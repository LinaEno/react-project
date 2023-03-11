import styled from 'styled-components';

export const WeatherName = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: white;
  font-family: 'Circe';
  margin-bottom: 10px;
`;

export const WeatherWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 200px;
  background-color: transparent;
  text-align: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const CitySearch = styled.input`
  width: 160px;
  border: 2px solid #ccc;
  outline: none;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;
  padding: 8px 12px;
  position: relative;
  z-index: 100;
`;

export const CityName = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: calc(27 / 18);
  color: white;
  font-family: 'Circe';
`;

export const DateWrapper = styled.div`
  font-size: 14px;
  line-height: calc(27 / 18);
  color: white;
  font-family: 'Circe';
`;

export const IconStyled = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: white;
  font-family: 'Circe';
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DegStyled = styled.span`
  font-size: 14px;
  color: white;
  font-family: 'Circe';
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  text-align: center;
  color: red;
  font-size: 16px;
`;
