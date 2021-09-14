import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: fit-content;
  max-height: 885px;
`

export const Table = styled.table`
  width: 100%;
  height: fit-content;
  padding-bottom: 5px;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 5px 0px 0 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  tr {
    &:nth-child(even) {
      color: #000;
      background: #f2f2f2;
    }

    th {
      color: #fff;
      background: #000;
      padding: 15px 20px;
      text-align: center;
    }
  }

  th,
  td {
    padding: 15px;
    text-align: center;
  }
`

export const ButtonDelete = styled.button`
  padding: 10px 15px;
  border-radius: 999px;
  background: #f36;
  color: #fff;
  cursor: pointer;
`
