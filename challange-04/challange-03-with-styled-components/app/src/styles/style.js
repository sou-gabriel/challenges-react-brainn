import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
`

export const Left = styled.div`
  width: 30%;
  min-width: 450px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f36;

  svg {
    margin-bottom: 32px;
  }
`

export const Right = styled.div`
  width: 70%;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  overflow: auto;
`