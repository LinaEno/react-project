import styled from 'styled-components';
import Datetime from 'react-datetime';

export const Section = styled.section`
  min-width: 280px;
  height: 560px;
  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 460px;
    height: 520px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-top: 0;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
  }
`;

export const ToggleContainer = styled.div`
  /* margin-top: 30px; */
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
  }
`;

export const Select = styled.select`
  padding-left: 20px;
  font-family: 'Circe';
  font-size: 18px;
  line-height: 1.5;
  width: 100%;
  min-width: 280px;
  height: 32px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    min-width: 394px;
  }
  &:required:invalid {
    color: gray;
  }
`;
export const Options = styled.option`
  padding-left: 20px;
  padding-bottom: 5px;
  font-family: 'Circe';
  font-size: 18px;
  line-height: 1.5;
  /* color: red; */
  & .one {
    /* color: #c3c3c4; */
  }
  /* select:required:invalid {
    color: gray;
  } */
  /* &[value=''][disabled] {
    display: none;
  } */
  /* option {
    color: black;
  } */
  /* &::disabled {
    color: #c3c3c4;
  } */
`;

// select:required:invalid {
//   color: gray;
// }
// option[value=""][disabled] {
//   display: none;
// }
// option {
//   color: black;
// }

export const ContainAmountDatetime = styled.div`
  @media screen and (min-width: 768px) {
    width: 394px;
    display: flex;
    justify-content: space-between;
  }
`;

export const FormInputAmount = styled.input`
  font-family: 'Circe';
  padding-left: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  width: 100%;
  width: 280px;
  height: 32px;
  /* margin-top: 30px; */
  /* padding: 10px; */
  margin-bottom: 40px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 768px) {
    width: 190px;
  }
`;

export const DateInput = styled(Datetime)`
  & .form-control {
    padding-left: 20px;
    font-family: 'Circe';
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    width: 100%;
    width: 250px;
    height: 32px;
    /* margin-bottom: 40px; */
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    @media screen and (min-width: 768px) {
      width: 160px;
    }
  }
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  /* padding-bottom: 10px; */
  /* margin-bottom: 40px; */
  /* border-bottom: 1px solid #e0e0e0; */
`;

export const ContainerDate = styled.div`
  display: flex;
  /* border-bottom: 1px solid #e0e0e0; */
`;

export const FormInputComment = styled.textarea`
  font-family: 'Circe';
  font-size: 18px;
  line-height: 1.5;
  width: 100%;
  min-width: 280px;
  height: 84px;
  /* padding-bottom: 60px; */
  margin-top: 30px;
  padding-left: 10px;
  padding-top: 0px;
  text-align: left;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 768px) {
    min-width: 394px;
    height: 32px;
  }
`;

export const AddButtonForm = styled.button`
  width: 300px;
  height: 50px;
  padding: 13px;
  background-color: #24cca7;
  border-radius: 20px;
  border: none;
  /* font-family: 'Circe'; */
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 30px;
  /* margin: 20px auto 0; */
  &:hover {
    /* box-shadow: 2px 4px 6px 2px rgb(17, 133, 133); */
  }
`;

export const CloseButtonForm = styled.button`
  width: 300px;
  height: 50px;
  padding: 13px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  /* font-family: 'Circe'; */
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  color: #4a56e2;
  margin-top: 10px;
  /* margin: 20px auto 0; */
  &:hover {
    /* box-shadow: 2px 4px 6px 2px rgb(17, 133, 133); */
  }
`;
