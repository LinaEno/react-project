import styled from 'styled-components';

export const StatisticTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 20px;
  margin-top: 32px;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    margin-top: 32px;
    margin-left: 84px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  height: auto;

  @media screen and (min-width: 768px) {
    align-items: stretch;
    flex-direction: row;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
    margin-right: 16px;
    margin-left: 69px;
  }
`;
