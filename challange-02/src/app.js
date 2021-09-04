import { useState } from 'react'
import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { ContentArea } from './content-area'
import { Footer } from './footer'
import { H2 } from './h2'
import './style.css'

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
            <code>callback</code>: Trata-se de uma função que será executada
            para cada item do array, onde o valor que ela retorna será
            adicionado no array gerado pelo <code>map</code>. Esta função pode
            ser declarada com 3 parâmetros, sendo eles:
            <ol>
              <li>
                <code>item</code>: Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <code>index</code>: Recebe o index do item atual que está sendo
                iterado;
              </li>
              <li>
                <code>array</code>: Recebe o array que está sendo iterado.
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
            <code>callback</code>: Uma função que será executada para cada item
            do array. Se o valor retornado por esta função for um valor truthy
            (qualquer valor que não é falsy) o item atual que está sendo iterado
            será adicionado no array gerado pelo método, mas se o valor
            retornado da função é um valor falsy o <code>filter</code> ignora
            este item e não adiciona ele no novo array. Esta callback pode ser
            declarada com 3 parâmetros, sendo eles:
            <ol>
              <li>
                <code>item</code>: Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <code>index</code>: Recebe o index do item atual que está sendo
                iterado;
              </li>
              <li>
                <code>array</code>: Recebe o array que está sendo iterado.
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
            <code>reducer</code>: Trata-se de uma callback que será executada
            para cada item do array original. Esta callback pode ser declarada
            com 4 parâmetros, sao eles:
            <ol>
              <li>
                <code>accumulator</code>: Recebe o valor retornado pela função
                <code>reducer</code> a cada iteração;
              </li>
              <li>
                <code>item</code>: Recebe o item atual que está sendo iterado;
              </li>
              <li>
                <code>index</code>: Recebe o index do item atual que está sendo
                iterado;
              </li>
              <li>
                <code>array</code>: Recebe o próprio array que está sendo
                iterado.
              </li>
            </ol>
          </li>
          <li>
            <code>initialValue</code>: Trata-se do valor inicial que será
            passado para o parâmetro <code>accumulator</code> logo na primeira
            iteração. Se este argumento é omitido o parâmetro <code>accumulator</code>
            armazenará na primeira iteração o primeiro item do array e o
            parâmetro <code>item</code> receceberá o segundo item do array.
          </li>
        </ol>

        <H2>Retorno</H2>
        <p>
          O último valor retornado pela função <code>reducer</code>.
        </p>
      </>
    )
  }
]

export const App = () => {
  const [title, setTitle] = useState(posts[0].title)
  const [content, setContent] = useState(posts[0].content)

  return (
    <div className="grid-container">
      <Header />
      <Menu />
      <Sidebar posts={posts} setTitle={setTitle} setContent={setContent} />
      <ContentArea title={title} content={content} />
      <Footer />
    </div>
  )
}
