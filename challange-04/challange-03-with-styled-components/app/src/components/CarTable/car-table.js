import { Container, Table, ButtonDelete } from './style'

export const CarTable = ({ cars, setCars }) => {
  const deleteCar = (event) => {
    fetch('http://localhost:3333/cars', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        plate: event.target.dataset.plate,
      }),
    })

    const filteredCars = cars.filter(
      (car) => car.plate !== event.target.dataset.plate
    )

    setCars(filteredCars)
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