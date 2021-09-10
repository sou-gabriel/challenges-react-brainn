import { Container } from './style'

export const Button = ({ kind, children }) => {
  return <Container kind={kind}>{children}</Container>
}