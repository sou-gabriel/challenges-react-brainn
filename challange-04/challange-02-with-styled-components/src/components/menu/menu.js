import { Container } from './style'
import { Button } from '../button/button'

export const Menu = () => {
  return (
    <Container>
      <Button kind="primary">Obter conteúdos extras</Button>
      <Button kind="secondary">Criar postagem</Button>
    </Container>
  )
}