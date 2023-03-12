import styled from 'styled-components';
import arrow from '../../images/Arrow.png';

export const WrapperTable = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const SelectsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 32px;
    margin-top: -25px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 280px;
  height: 50px;
  border-radius: 30px;
  color: black;
  border: 1px solid #000000;
  cursor: pointer;
  padding: 12px 20px 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &::after {
    content: url(${arrow});
    width: 18px;
    transition: transform 300ms;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
  }
`;

export const SelectDate = styled.ul`
  position: absolute;
  margin-bottom: 0;
  padding: 0;
  /* opacity: 0; */
  display: none;
  padding: 8px 0;
  background-color: #e5e5e5;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 280px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
  }
`;

export const Drop = styled.li`
  padding: 4px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 8px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #fff;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 16px;
`;

export const THead = styled.thead``;

export const TR = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 30px;
`;

export const TH = styled.th`
  /* font-family:circle; */
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
`;

export const TableRow = styled.tr`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;
  font-family: 'Circe', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  padding: 16px 20px 14px;
  width: 100%;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dcdcdf;
  }
`;

export const Sum = styled.p`
  /* font-family:circle; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px;
`;

export const Expenses = styled.span`
  color: #ff6596;
`;

export const Income = styled.span`
  color: #24cca7;
`;

export const Color = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 180px;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-right: 16px;
    background-color: ${props => props.color};
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
  margin-bottom: 20px;
  z-index: 100;

  &.dropdownShown {
    ${SelectDate} {
      pointer-events: all;
      /* opacity: 1; */
      display: block;
    }
    & ${SelectButton} {
      border-color: #000;
      color: #000;
      &::after {
        transform: rotate(180deg);
        z-index: 2;
      }
    }
  }
`;

export const DropdownMenuMonth = styled.div`
  position: relative;
  margin-bottom: 20px;
  z-index: 120;

  &.dropdownShown {
    ${SelectDate} {
      pointer-events: all;
      /* opacity: 1;
       */
      display: block;
    }
    & ${SelectButton} {
      border-color: #000;
      color: #000;
      &::after {
        transform: rotate(180deg);
        z-index: 2;
      }
    }
  }
`;
