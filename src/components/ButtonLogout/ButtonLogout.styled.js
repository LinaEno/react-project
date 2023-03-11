import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/svg/exit.svg';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
  color: #bdbdbd;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 57px;
  }
`;

export const Icon = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  stroke: currentColor;
`;
