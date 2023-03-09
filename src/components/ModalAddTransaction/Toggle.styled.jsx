import styled from 'styled-components';


export const StyledToggle = styled.button`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  border: 1px solid #E0E0E0;
  opacity: ${({ disabled }) => (disabled ? '0.6': '1')};
`;

export const StyledCircleDiv = styled.div`
  position: absolute;
  background-color: ${({ active }) => (active ? '#FF6596': '#24CCA7')};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ active }) => (active ? '5px': '0')};
  top: -3px;
  left: ${({ active }) => (active ? '35px' : '-3px')};
  transition: left 0.2s ease, background-color 0.2s ease;
  box-shadow: ${({ active }) => (active ? '0px 6px 15px rgba(255, 101, 150, 0.5)' : '0px 6px 15px rgba(36, 204, 167, 0.5)')};
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ color }) => color};
  transition: color 1s ease;
`

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`