import styled from 'styled-components';

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
  width: 540px;
  height: 508px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: #ccc;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: color 250ms linear;
  &:hover,
  :focus {
    color: #000000;
  }
`;
