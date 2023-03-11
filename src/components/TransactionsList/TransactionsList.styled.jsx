import styled from 'styled-components';

/* Common */

export const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 84px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`

  width: 100%;
  /* padding: 0 20px; */
  margin: 0 auto;


  /* @media screen and (min-width: 480px) {
    max-width: 480px;
  } */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* max-width: 768px; */
    height: 560px;
    /* padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* max-width: 800px; */
    height: 600px;
    padding-left: 69px;
    /* padding-right: 16px; */
  }
`;

/* Mobile */

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Item = styled.li`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: ${props =>
      props.type === 'INCOME' ? '#24cca7' : '#ff6596'};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const Stat = styled.p`
  padding-left: 12px;
  text-align: end;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  word-break: break-word;

  &:nth-of-type(5) {
    color: ${props => (props.type === 'INCOME' ? '#24cca7' : '#ff6596')};
    font-weight: 700;
  }
`;

export const StatSum = styled(Stat)`
  color: ${props => (props.type === 'INCOME' ? '#24cca7' : '#ff6596')};
  font-weight: 700;
`;

/* Tablet and Desktop */

export const Table = styled.table`
  border-collapse: collapse;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const TableHead = styled.th`
  height: 58px;
  text-align: start;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  background-color: #fff;

  &:first-child {
    padding-left: 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  &:last-child {
    padding-right: 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  &:nth-child(2) {
    padding-right: 20px;
    text-align: center;
  }

  &:nth-child(5) {
    text-align: end;
  }
`;

export const TableBody = styled.td`
  height: 52px;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  &:first-child {
    padding-left: 20px;
  }

  &:nth-child(2) {
    padding-right: 20px;
    text-align: center;
  }

  &:nth-child(4) {
    max-width: 160px;
  }

  &:nth-child(5) {
    text-align: end;
    color: ${props => (props.type === 'INCOME' ? '#24cca7' : '#ff6596')};
    font-weight: 700;
  }

  &:last-child {
    padding-right: 20px;
    text-align: end;
  }
`;

export const DeleteButton = styled.button`
  padding: 4px 12px;
  color: #fff;
  font-weight: 400;
  font-family: inherit;
  font-size: 14px;
  line-height: calc(21 / 14);
  background-color: #24cca7;
  border-radius: 18px;
  border: none;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const EditButton = styled.button`
  width: 20px;
  height: 20px;
  font-family: inherit;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 767.98px) {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 52px;
    font-size: 14px;
    line-height: calc(21 / 14);
  }
`;
