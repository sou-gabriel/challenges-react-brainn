import { useState } from 'react'
import { Header } from './components/header/header'
import { Menu } from './components/menu/menu'
import { Sidebar } from './components/sidebar/sidebar'
import { ContentArea } from './components/content-area/content-area'
import { Footer } from './components/footer/footer'
import { H3 } from './components/h3/h3'
import { GlobalStyle } from './styles/global'
import { GridContainer, InternalList } from './styles/style'

const posts = [
  {
    id: 1,
    title: 'Desvendando o método Array.prototype.map() do JavaScript',
    content: (
      <>
        <H3>Descrição</H3>
        <p>
          Trata-se de um método responsável por gerar um novo array com a mesma
          quantidade de itens do array original.
        </p>

        <H3>Quando usar?</H3>
        <p>
          Este método é usado toda vez que precisamos gerar um novo array com a
          mesma quantidade de itens do array original, porém com cada item
          transformado.
        </p>

        <H3>Argumentos</H3>
        <ol>
          <li>
            <strong>
              callback
            </strong>
            : Trata-se de uma função que será executada para cada item do array,
            onde o valor que ela retorna será adicionado no array gerado pelo{' '}
            <strong>
              map
            </strong>
            . Esta função pode ser declarada com 3 parâmetros, sendo eles:
            <InternalList>
              <li>
                <strong>
                  item
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  index
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  array
                </strong>
                : Recebe o array que está sendo iterado.
              </li>
            </InternalList>
          </li>
        </ol>

        <H3>Retorno</H3>
        <p>Um novo array com a mesma quantidade de itens do array original.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'O método Array.prototype.filter()',
    content: (
      <>
        <H3>Descrição</H3>
        <p>
          Trata-se de um método responsável por criar um novo array com apenas
          alguns itens específicos do array onde sua invocação está encadeada.
        </p>

        <H3>Quando usar?</H3>
        <p>
          Sempre que é necessário criar um novo array com apenas alguns itens
          específicos do array original.
        </p>

        <H3>Argumentos</H3>
        <ol>
          <li>
            <strong>
              callback
            </strong>
            : Uma função que será executada para cada item do array. Se o valor
            retornado por esta função for um valor truthy (qualquer valor que
            não é falsy) o item atual que está sendo iterado será adicionado no
            array gerado pelo método, mas se o valor retornado da função é um
            valor falsy (0, false, '', "", ``, null, undefined) o{' '}
            <strong>
              filter
            </strong>{' '}
            ignora este item e não adiciona ele no novo array. Esta callback
            pode ser declarada com 3 parâmetros, sendo eles:
            <InternalList>
              <li>
                <strong>
                  item
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  index
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  array
                </strong>
                : Recebe o array que está sendo iterado.
              </li>
            </InternalList>
          </li>
        </ol>

        <H3>Retorno</H3>
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
        <H3>Descrição</H3>
        <p>
          Trata-se de um dos métodos mais poderosos do JavaScript moderno.
          Através deste método é possível reduzir um array a um único valor de
          qualquer tipo.
        </p>

        <H3>Quando usar?</H3>
        <p>
          Este método é usado sempre que precisamos reduzir um array a um único
          valor.
        </p>

        <H3>Argumentos</H3>
        <ol>
          <li>
            <strong>
              reducer
            </strong>
            : Trata-se de uma callback que será executada para cada item do
            array original. Esta callback pode ser declarada com 4 parâmetros,
            sao eles:
            <InternalList>
              <li>
                <strong>
                  accumulator
                </strong>
                : Recebe o valor retornado pela função{' '}
                <strong>
                  reducer
                </strong>{' '}
                a cada iteração;
              </li>
              <li>
                <strong>
                  item
                </strong>
                : Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  index
                </strong>
                : Recebe o index do item atual que está sendo iterado;
              </li>
              <li>
                <strong>
                  array
                </strong>
                : Recebe o próprio array que está sendo iterado.
              </li>
            </InternalList>
          </li>
          <li>
            <strong>
              initialValue
            </strong>
            : Trata-se do valor inicial que será passado para o parâmetro{' '}
            <strong>
              accumulator
            </strong>{' '}
            logo na primeira iteração. Se este argumento é omitido o parâmetro{' '}
            <strong>
              accumulator
            </strong>{' '}
            armazenará na primeira iteração o primeiro item do array e o
            parâmetro{' '}
            <strong>
              item
            </strong>{' '}
            receceberá o segundo item do array.
          </li>
        </ol>

        <H3>Retorno</H3>
        <p>
          O último valor retornado pela função{' '}
          <strong>
            reducer
          </strong>
          .
        </p>
      </>
    ),
  }
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