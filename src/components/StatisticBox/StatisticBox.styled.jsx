import styled from 'styled-components';
import arrow from '../../images/Arrow.png';

export const WrapperTable = styled.div`
  width: 396px;
`;

export const SelectsList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 182px;
  height: 50px;
  border-radius: 30px;
  color: black;
  border: 1px solid #000000;
  cursor: pointer;
  padding: 13px 16px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-right: 32px;

  &::after {
    content: url(${arrow});
    width: 18px;
    transition: transform 300ms;
  }
`;

export const SelectDate = styled.ul`
  position: absolute;
  margin-bottom: 0;
  padding: 0;
  opacity: 0;
  background-color: #e5e5e5;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 182px;
  height: auto;

  &:not-last-child {
    margin-right: 32px;
  }
`;

export const Drop = styled.li`
  padding-left: 20px;
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
  /* display: block; */
  width: 100%;
  margin-bottom: 10px;
`;

export const THead = styled.thead`
  /* display: block; */
  /* width: 100%; */
`;

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
  padding: 14px 20px;
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
`;

export const Expenses = styled.span`
  color: #ff6596;
`;

export const Income = styled.span`
  color: #24cca7;
`;

export const Color = styled.td`
  display: flex;
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
      opacity: 1;
    }
    & ${SelectButton} {
      border-color: transparent;
      color: #000;
      /* background-color: transparent; */
      &::after {
        transform: rotate(180deg);
        z-index: 2;
      }
    }
  }
`;
