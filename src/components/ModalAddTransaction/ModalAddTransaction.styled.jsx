import styled from 'styled-components';

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
  /* font-family: 'Circe'; */
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
  /* font-family: 'Circe'; */
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

  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    box-shadow: 2px 4px 2px 2px rgb(205, 156, 92);
  } */
`;

export const FormInputComment = styled.input`
  /* font-family: 'Circe'; */
  font-size: 18px;
  line-height: 1.5;
  width: 100%;
  min-width: 280px;
  height: 84px;
  margin-top: 30px;
  /* padding: 10px; */
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

export const Div = styled.div`
  background: red;
`;

{
  /* <p>
  <Controller
    control={control}
    name="transactionDate"
    required
    render={({ field }) => {
      const { onChange, name, value } = field;
      <DatePicker
        // placeholderText={moment(startDate).format('L')}
        dateFormat="dd.MM.yyyy"
        maxDate={addDays(new Date(), 0)}
        value={new Date(value)}
        // selected={field.value}
        selected={Date.now()}
        onChange={moment => {
          onChange({
            target: {
              name,
              value: moment.toISOString(),
            },
          });
        }}
        // onChange={date => setStartDate(date)}
        // onChange={date => field.onChange(setStartDate(date))}
      />;
    }}
  />
  ;
</p>; */
}
