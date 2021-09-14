import { Container, Table, ButtonDelete } from './style'

export const CarTable = (props) => {
  const { cars, setCars, setFeedbackMessage } = props

  const updateCarTable = (carLicensePlateExcluded) => {
    const filteredCars = cars.filter(
      ({ plate }) => plate !== carLicensePlateExcluded
    )
    setCars(filteredCars)
  }

  const deleteCar = async (event) => {
    const { message } = await (
      await fetch('http://localhost:3333/cars', {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          plate: event.target.dataset.plate,
        }),
      })
    ).json()

    setFeedbackMessage(message)
    updateCarTable(event.target.dataset.plate)
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Imagem (URL)</th>
            <th>Marca/Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cars.length ? (
            cars.map((car) => (
              <tr key={car.plate}>
                <td>
                  <img alt={car.brandModel} width="200" src={car.image} />
                </td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>{car.color}</td>
                <td>
                  <ButtonDelete data-plate={car.plate} onClick={deleteCar}>
                    Deletar
                  </ButtonDelete>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum carro encontrado</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
