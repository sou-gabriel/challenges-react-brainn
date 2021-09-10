import styled from 'styled-components'

export const Container = styled.aside`
  margin-right: 16px;
  padding-left: 16px;
  grid-area: sidebar;
`

export const List = styled.ul`
  max-width: fit-content;
  margin-top: 8px;
  border-radius: 10px;
  list-style: none;
`

export const ListItem = styled.li`
  margin-bottom: 16px;

  &:hover {
    transform: scale(1.02);
  }
`

export const Link = styled.a`
  display: inline-block;
  width: fit-content;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  letter-spacing: .5px;
  background: #000;
`