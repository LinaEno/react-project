import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 480px;
    border-right: 1px solid #e7e5f2;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* @media screen and (min-width: 1280px) {
    max-width: 395px;
  } */
`;
