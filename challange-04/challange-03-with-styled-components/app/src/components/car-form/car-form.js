import { Container, InputBlock, ButtonSubmit, } from './style'

export const CarForm = props => {
  const {
    cars,
    setCars,
    showFeedbackMessage
  } = props

  const resetFieldsForm = form => {
    form.reset()
    form.image.focus()
  }

  const registerCar = async event => {
    event.preventDefault()

    try {
      const newCar = {
        image: event.target.image.value,
        brandModel: event.target.brandModel.value,
        year: event.target.year.value,
        plate: event.target.plate.value,
        color: event.target.color.value,
      }

      const { error, message } = await (await fetch(
        'http://localhost:3333/cars',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCar),
        }
      )).json()

      if (error) {
        throw new Error(message)
      }

      showFeedbackMessage(message)
      setCars([...cars, newCar])
      resetFieldsForm(event.target)
    } catch ({ message }) {
      showFeedbackMessage(message)
      resetFieldsForm(event.target)
    }
  }

  return (
    <Container onSubmit={registerCar}>
      <InputBlock>
        <label htmlFor="image">
          Imagem (URL)
        </label>
        <input type="text" id="image" required placeholder="http://..." />
      </InputBlock>

      <InputBlock>
        <label htmlFor="brandModel">
          Marca/Modelo
        </label>
        <input type="text" id="brandModel" required placeholder="Ex.: Fiat" />
      </InputBlock>

      <InputBlock>
        <label htmlFor="year">
          Ano
        </label>
        <input type="number" id="year" required placeholder="Ex.: 2021" />
      </InputBlock>

      <InputBlock>
        <label htmlFor="plate">
          Placa
        </label>
        <input type="text" id="plate" required placeholder="Ex.: ABC-1234" />
      </InputBlock>

      <InputBlock>
        <label htmlFor="color">
          Cor
        </label>
        <input type="color" id="color" required />
      </InputBlock>

      <ButtonSubmit>Cadastrar novo carro</ButtonSubmit>
    </Container>
  )
}