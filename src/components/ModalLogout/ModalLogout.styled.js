import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Question = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: calc(45 / 30);
  font-weight: 400;
  color: #000;
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  color: #4a56e2;
  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    border: 1px solid #24cca7;
    color: #fff;
    background-color: #24cca7;
  }
`;
