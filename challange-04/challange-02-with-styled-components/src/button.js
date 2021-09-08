import styled from 'styled-components'

const Container = styled.button`
  padding: 15px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 5px;
  background: ${props => props.kind === 'primary' ? '#f36' : '#000'};
`

export const Button = ({ kind, children }) => {
  return <Container className={kind}>{children}</Container>
}