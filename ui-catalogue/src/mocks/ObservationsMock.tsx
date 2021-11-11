import * as Faker from 'faker'

const dataObservationsEmpty = {
  condicionesadicionales: '',
  terminosventa: '',
  procedimientoslegales: '',
  comentariogeneral: ''
}

const dataObservationsFaker = {
  condicionesadicionales: Faker.random.words(),
  terminosventa: Faker.random.words(),
  procedimientoslegales: Faker.random.words(),
  comentariogeneral: Faker.random.words()
}

export {
  dataObservationsEmpty,
  dataObservationsFaker
}
