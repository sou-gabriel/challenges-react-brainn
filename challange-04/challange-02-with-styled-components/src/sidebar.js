import { H2 } from './h2'
import styled from 'styled-components'

const Container = styled.aside`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: sidebar;
`

const List = styled.ul`
  max-width: fit-content;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  list-style: none;
  background-color: #15181C;


  li {
    padding: 10px 0;
    color: #000;
    position: relative;

    span {
      display: block;
      width: 100%;
      height: 20px;
      position: absolute;
      z-index: -1;
      border-radius: 0 2px 2px;
    }


    a {
      display: block;
      font-size: 16px;
      color: #ddd;
      text-decoration: none;
      letter-spacing: .5px;

      &:hover {
        transform: scale(1.02);
      }
    }    
  }
`

export const Sidebar = ({ posts, setTitle, setContent }) => {
  return (
    <Container>
      <H2>Últimas postagens</H2>
      {        
        <List>
          {posts.map(({ id, title, content }) => {
            return (
              <li key={id}>
                <span></span>
                <a
                  href="#"
                  onClick={() => {
                    setTitle(title)
                    setContent(content)
                  }}
                >
                  {title}
                </a>
              </li>
            )
          })}
        </List>
      }
    </Container>
  )
}
