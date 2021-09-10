import { H2 } from '../h2/h2'
import { Container } from './style'

export const ContentArea = ({ title, content }) => {
  return (
    <Container>
      <H2>{title}</H2>
      {content}
    </Container>
  )
}