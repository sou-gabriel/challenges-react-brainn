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
    <form className="form" onSubmit={registerCar}>
      <div className="input-block">
        <label className="label" htmlFor="image">
          Imagem (URL)
        </label>
        <input className="input" type="text" id="image" required />
      </div>

      <div className="input-block">
        <label className="label" htmlFor="brandModel">
          Marca/Modelo
        </label>
        <input className="input" type="text" id="brandModel" required />
      </div>

      <div className="input-block">
        <label className="label" htmlFor="year">
          Ano
        </label>
        <input className="input" type="number" id="year" required />
      </div>

      <div className="input-block">
        <label className="label" htmlFor="plate">
          Placa
        </label>
        <input className="input" type="text" id="plate" required />
      </div>

      <div className="input-block">
        <label className="label" htmlFor="color">
          Cor
        </label>
        <input className="input" type="color" id="color" required />
      </div>

      <button className="submit-button">Cadastrar novo carro</button>
    </form>
  )
}
