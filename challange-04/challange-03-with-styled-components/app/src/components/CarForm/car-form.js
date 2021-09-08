import { Container, InputBlock, ButtonSubmit,  } from './style'

export const CarForm = ({ cars, setCars }) => {
  const registerCar = (event) => {
    event.preventDefault()

    const registeredCar = cars.find(
      (car) => car.plate === event.target.plate.value
    )

    if (!registeredCar) {
      fetch('http://localhost:3333/cars', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          image: event.target.image.value,
          brandModel: event.target.brandModel.value,
          year: event.target.year.value,
          plate: event.target.plate.value,
          color: event.target.color.value,
        }),
      })

      setCars([
        {
          image: event.target.image.value,
          brandModel: event.target.brandModel.value,
          year: event.target.year.value,
          plate: event.target.plate.value,
          color: event.target.color.value,
        },
        ...cars        
      ])
    }
  }

  return (
    <Container onSubmit={registerCar}>
      <InputBlock>
        <label htmlFor="image">
          Imagem (URL)
        </label>
        <input type="text" id="image" required />
      </InputBlock>

      <InputBlock>
        <label htmlFor="brandModel">
          Marca/Modelo
        </label>
        <input type="text" id="brandModel" required />
      </InputBlock>

      <InputBlock>
        <label htmlFor="year">
          Ano
        </label>
        <input type="number" id="year" required />
      </InputBlock>

      <InputBlock>
        <label htmlFor="plate">
          Placa
        </label>
        <input type="text" id="plate" required />
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