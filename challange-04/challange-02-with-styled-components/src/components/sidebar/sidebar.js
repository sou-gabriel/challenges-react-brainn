import { H2 } from '../h2/h2'
import { Container, List, ListItem, Link } from './style'

export const Sidebar = ({ posts, setTitle, setContent }) => {
  return (
    <Container>
      <H2>Últimas postagens</H2>
      {        
        <List>
          {posts.map(({ id, title, content }) => {
            return (
              <ListItem key={id}>
                <Link
                  href="#"
                  onClick={() => {
                    setTitle(title)
                    setContent(content)
                  }}
                >
                  {title}
                </Link>
              </ListItem>
            )
          })}
        </List>
      }
    </Container>
  )
}
