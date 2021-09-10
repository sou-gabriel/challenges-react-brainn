export const CarTable = props => {
  const {
    cars,
    setCars,
    showFeedbackMessage,
  } = props

  const updateCarTable = carLicensePlateExcluded => {
    const filteredCars = cars.filter(({ plate }) =>
      plate !== carLicensePlateExcluded)
    setCars(filteredCars)
  }

  const deleteCar = async event => {
    const { message } = await (await fetch('http://localhost:3333/cars', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        plate: event.target.dataset.plate,
      }),
    })).json()

    showFeedbackMessage(message)
    updateCarTable(event.target.dataset.plate)
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="cell">Imagem (URL)</th>
            <th className="cell">Marca/Modelo</th>
            <th className="cell">Ano</th>
            <th className="cell">Placa</th>
            <th className="cell">Cor</th>
            <th className="cell"></th>
          </tr>
        </thead>

        <tbody className="table-content">
          {cars.length ? (
            cars.map((car) => (
              <tr className="row" key={car.plate}>
                <td className="cell">
                  <img alt={car.brandModel} width="200" src={car.image} />
                </td>
                <td className="cell">{car.brandModel}</td>
                <td className="cell">{car.year}</td>
                <td className="cell">{car.plate}</td>
                <td className="cell">{car.color}</td>
                <td className="cell">
                  <button className="button-delete" data-plate={car.plate} onClick={deleteCar}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="cell centralized">Nenhum carro encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
