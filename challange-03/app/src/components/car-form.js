export const CarForm = (props) => {
  const { cars, setCars, setFeedbackMessage } = props

  const resetFieldsForm = (form) => {
    form.reset()
    form.image.focus()
  }

  const registerCar = async (event) => {
    event.preventDefault()

    try {
      const newCar = {
        image: event.target.image.value,
        brandModel: event.target.brandModel.value,
        year: event.target.year.value,
        plate: event.target.plate.value,
        color: event.target.color.value,
      }

      const { error, message } = await (
        await fetch('http://localhost:3333/cars', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCar),
        })
      ).json()

      if (error) {
        throw new Error(message)
      }

      setFeedbackMessage(message)
      setCars([...cars, newCar])
      resetFieldsForm(event.target)
    } catch ({ message }) {
      setFeedbackMessage(message)
      resetFieldsForm(event.target)
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
