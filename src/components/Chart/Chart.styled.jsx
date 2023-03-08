import styled from '@emotion/styled';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutBox = styled(Doughnut)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChartContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
`;

export const ChartLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;
