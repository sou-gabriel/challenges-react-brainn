import styled from 'styled-components'

const Container = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  font-weight: bolder;
  color: #ddd;
  text-decoration: none;
`

export const Footer = () => {
  return (
    <Container>
      <p>Blog desenvolvido durante o Bootcamp de React da <Link href="https://brainn.co/" target="_blank">Brainn.co</Link></p>
    </Container>
  )
}