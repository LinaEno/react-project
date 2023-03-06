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

  th {
    background-color: #eee;
    font-weight: bold;
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
`;