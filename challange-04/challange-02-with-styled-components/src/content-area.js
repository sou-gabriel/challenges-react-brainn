import { H1 } from './h1'
import styled from 'styled-components'

const Container = styled.section`
  height: 500px;
  padding: 20px 50px;
  border-radius: 5px 0 0 5px;
  background-color: #fff;
  color: #000;
  background: linear-gradient(0deg,rgba(255, 255, 255, 0.61),#f9f9f9);
  grid-area: content-area;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }

  ul,
  ol {
    list-style-position: inside;
  }

  li {
    margin-bottom: 5px; 
    
    ol {
      margin-left: 15px;
    }
  }
`

export const ContentArea = ({ title, content }) => {
  return (
    <Container>
      <H1>{title}</H1>
      {content}
    </Container>
  )
}