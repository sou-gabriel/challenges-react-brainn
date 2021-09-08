import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  grid-area: menu;
`

const Link = styled.a`
  display: inline-block;
  width: 200px;
  padding: 15px 0;
  border-radius: 5px;
  text-align: center;
  color: ${props => props.textColor};
  text-decoration: none;
  background: ${props => props.bgColor};
  transition: 100ms;

  &:hover {
    background: #000;
    color: #fff;
    border: 2px solid ${props => props.bgColor};
  }
`

export const Menu = () => {
  return (
    <Container>
      <Link 
        href="https://www.linkedin.com/in/sou-gabriel/" 
        textColor="#000"
        bgColor="#fff"
        target="_blank"
      >
        Linkedin
      </Link>

      <Link 
        href="https://github.com/sou-gabriel" 
        textColor="#fff"
        bgColor="#f36"
        target="_blank"
      >
        GitHub
      </Link>
    </Container>
  )
}