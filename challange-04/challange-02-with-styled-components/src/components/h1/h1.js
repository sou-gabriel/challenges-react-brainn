import styled from 'styled-components'

const Container = styled.h1`
  position: relative;
` 

export const H1 = ({ children }) => {
  return <Container>{children}</Container>
}