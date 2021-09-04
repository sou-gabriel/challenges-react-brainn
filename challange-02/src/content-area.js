import { H2 } from './h2'
import { H3 } from './h3'
import { Button } from './button'

export const ContentArea = () => {
  return (
    <section className="content-area">
      <H2>What is Lorem Ipsum?</H2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <H3>Why do we use it?</H3>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>      
      <ul>
        <li>Contrary to popular belief</li>
        <li>Letraset sheets containing</li>
        <li>Publishing software like</li>
      </ul>

      <Button kind="secondary">Saiba mais</Button>
    </section>
  )
}