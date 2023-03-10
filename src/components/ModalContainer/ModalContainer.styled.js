import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/svg/close.svg';

export const ModalMobile = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  z-index: 100;
  transform: translateX(-50%);
`;

export const ModalWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 767.98px) {
    max-width: 480px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const ModalBox = styled.div`
  position: relative;
  min-width: 540px;
  min-height: 508px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000000;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const Icon = styled(CloseIcon)`
  width: 16px;
  height: 16px;
  stroke: currentColor;
`;
