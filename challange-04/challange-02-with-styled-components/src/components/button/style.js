import styled from 'styled-components'

export const Container = styled.button`
  width: 250px;
  padding: 16px 0;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.kind === 'primary' ? '#f36' : '#000'};
  font-weight: bolder;
  letter-spacing: .5px;
  color: #fff;
  cursor: pointer;
`