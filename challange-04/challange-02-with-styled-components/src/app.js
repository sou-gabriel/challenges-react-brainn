import { useState } from 'react'
import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { ContentArea } from './content-area'
import { Footer } from './footer'
import { H2 } from './h2'
import styled, { createGlobalStyle } from 'styled-components'
import './style.css'

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    font-family: 'Trebuchet MS', sans-serif;
    color: #fff;    
    background-color: #000;
  }
`

const GridContainer = styled.div`
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
`

const posts = [
  {
    id: 1,
    title: 'Desvendando o método Array.prototype.map() do JavaScript',
    content: (
      <>
        <H2>Descrição</H2>
        <p>
          Trata-se de um método responsável por gerar um novo array com a mesma
          quantidade de itens do array original.
        </p>

        <H2>Quando usar?</H2>
        <p>
          Este método é usado toda vez que precisamos gerar um novo array com a
          mesma quantidade de itens do array original, porém com cada item
          transformado.
        </p>

        <H2>Argumentos</H2>
        <ol>
          <li>
            <strong>
              <em>callback</em>
            </strong>
            : Trata-se de uma função que será executada para cada item do array,
            onde o valor que ela retorna será adicionado no array gerado pelo{' '}
            <strong>
              <em>map</em>
            </strong>
            . Esta função pode ser declarada com 3 parâmetros, sendo eles:
            <ol>
              <li>
                <strong>
                  <em>item</em>
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>index</em>
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>array</em>
                </strong>
                : Recebe o array que está sendo iterado.
              </li>
            </ol>
          </li>
        </ol>

        <H2>Retorno</H2>
        <p>Um novo array com a mesma quantidade de itens do array original.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'O método Array.prototype.filter()',
    content: (
      <>
        <H2>Descrição</H2>
        <p>
          Trata-se de um método responsável por criar um novo array com apenas
          alguns itens específicos do array onde sua invocação está encadeada.
        </p>

        <H2>Quando usar?</H2>
        <p>
          Sempre que é necessário criar um novo array com apenas alguns itens
          específicos do array original.
        </p>

        <H2>Argumentos</H2>
        <ol>
          <li>
            <strong>
              <em>callback</em>
            </strong>
            : Uma função que será executada para cada item do array. Se o valor
            retornado por esta função for um valor truthy (qualquer valor que
            não é falsy) o item atual que está sendo iterado será adicionado no
            array gerado pelo método, mas se o valor retornado da função é um
            valor falsy (0, false, '', "", ``, null, undefined) o{' '}
            <strong>
              <em>filter</em>
            </strong>{' '}
            ignora este item e não adiciona ele no novo array. Esta callback
            pode ser declarada com 3 parâmetros, sendo eles:
            <ol>
              <li>
                <strong>
                  <em>item</em>
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>index</em>
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>array</em>
                </strong>
                : Recebe o array que está sendo iterado.
              </li>
            </ol>
          </li>
        </ol>

        <H2>Retorno</H2>
        <p>
          Um novo array com apenas alguns itens específicos do array original.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Reduzindo arrays através do método Array.prototype.reduce()',
    content: (
      <>
        <H2>Descrição</H2>
        <p>
          Trata-se de um dos métodos mais poderosos do JavaScript moderno.
          Através deste método é possível reduzir um array a um único valor de
          qualquer tipo.
        </p>

        <H2>Quando usar?</H2>
        <p>
          Este método é usado sempre que precisamos reduzir um array a um único
          valor.
        </p>

        <H2>Argumentos</H2>
        <ol>
          <li>
            <strong>
              <em>reducer</em>
            </strong>
            : Trata-se de uma callback que será executada para cada item do
            array original. Esta callback pode ser declarada com 4 parâmetros,
            sao eles:
            <ol>
              <li>
                <strong>
                  <em>accumulator</em>
                </strong>
                : Recebe o valor retornado pela função{' '}
                <strong>
                  <em>reducer</em>
                </strong>{' '}
                a cada iteração;
              </li>
              <li>
                <strong>
                  <em>item</em>
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>index</em>
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  <em>array</em>
                </strong>
                : Recebe o próprio array que está sendo iterado.
              </li>
            </ol>
          </li>
          <li>
            <strong>
              <em>initialValue</em>
            </strong>
            : Trata-se do valor inicial que será passado para o parâmetro{' '}
            <strong>
              <em>accumulator</em>
            </strong>{' '}
            logo na primeira iteração. Se este argumento é omitido o parâmetro{' '}
            <strong>
              <em>accumulator</em>
            </strong>{' '}
            armazenará na primeira iteração o primeiro item do array e o
            parâmetro{' '}
            <strong>
              <em>item</em>
            </strong>{' '}
            receceberá o segundo item do array.
          </li>
        </ol>

        <H2>Retorno</H2>
        <p>
          O último valor retornado pela função{' '}
          <strong>
            <em>reducer</em>
          </strong>
          .
        </p>
      </>
    ),
  },
]

export const App = () => {
  const [title, setTitle] = useState(posts[0].title)
  const [content, setContent] = useState(posts[0].content)

  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <Header />
        <Menu />
        <Sidebar posts={posts} setTitle={setTitle} setContent={setContent} />
        <ContentArea title={title} content={content} />
        <Footer />
      </GridContainer>
    </>
  )
}
