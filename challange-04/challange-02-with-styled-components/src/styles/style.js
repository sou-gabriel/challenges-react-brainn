import styled from 'styled-components'

export const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: .5fr .5fr 2fr .5fr;
  grid-template-areas: 
    "header header"
    "menu menu"
    "sidebar content-area"
    "footer footer"
  ;

  @media (max-width: 768px) {
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const InternalList = styled.ol`
  padding-left: 32px;
  list-style-position: inside;
`

export const ListItem = styled.li`
  padding: 8px 0;
`