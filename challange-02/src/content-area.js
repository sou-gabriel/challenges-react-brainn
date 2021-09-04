import { H1 } from './h1'

export const ContentArea = ({ title, content }) => {
  return (
    <section>
      <H1>{title}</H1>
      {content}
    </section>
  )
}