import styled from '@emotion/styled';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutBox = styled(Doughnut)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChartContainer = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
  display: grid;
  place-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 336px;
  height: 336px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    width: 288px;
  height: 288px;
  }
`;

export const ChartLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  /* font-family: Circle; */
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;
