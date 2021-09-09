export const CarTable = ({ cars, setCars, setFeedbackMessage }) => {
  const deleteCar = event => {
    fetch('http://localhost:3333/cars', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        plate: event.target.dataset.plate,
      }),
    })
      .then(response => response.json())
      .then(({ message }) => {
        setFeedbackMessage(message)

        setTimeout(() => {
          setFeedbackMessage('')
        }, 4000)
      })
      .catch(error => {
        console.log(error)
      })

    const filteredCars = cars.filter(
      (car) => car.plate !== event.target.dataset.plate
    )

    setCars(filteredCars)
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
