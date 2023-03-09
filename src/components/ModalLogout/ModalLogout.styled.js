import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: #fff;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Question = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: calc(45 / 30);
  font-weight: 400;
  color: #000;
  text-align: center;
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 280px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  color: #4a56e2;
  background-color: #fff;
  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    border: 1px solid #4a56e2;
    color: #fff;
    background-color: #4a56e2;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Navigate = styled(NavLink)`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #4a56e2;

  &:hover {
    color: #fff;
  }
`;

export const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
`