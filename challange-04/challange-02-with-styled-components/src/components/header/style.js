import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 10px;
      border-radius: 2px;
      background: #f36;
      position: absolute;
      bottom: -13px;
      left: 0%;
      z-index: -1;
      animation: appear 500ms ease-out;
    }
  }

  @keyframes appear {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`