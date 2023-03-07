import styled from 'styled-components';

export const Table = styled.table`
  width: 715px;
  border-collapse: collapse;
  margin: 30px;
  
  thead th {
    background: #FFFFFF;  
  }

  thead th:first-of-type {
    background: #FFFFFF;
    border-radius: 30px;
  }

  thead th:last-of-type {
    background: #FFFFFF;
    border-radius: 30px;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #DCDCDF;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  td {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  th {
    background-color: #eee;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

.editButton{
  background: transparent;
  padding: 0;
  border: none;
}
  @media (max-width: 767px) {
    th,
    td {
      display: block;
      width: 100%;
      text-align: center;
    }

    th {
      display: none;
    }
  }

  buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const DeleteButton = styled.button`
  padding: 4px 12px;
  background: #24CCA7;
  border-radius: 18px;
  color: rgba(255, 255, 255, 1);
  border: none;

`