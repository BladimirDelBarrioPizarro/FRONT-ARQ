import * as Faker from 'faker'

const dataLastAddressesEmpty = {
  fecha: '',
  direccion: '',
  telefono: '',
  fuente: '',
  fecha2: '',
  direccion2: '',
  telefono2: '',
  fuente2: ''
}

const dataLastAddressesFaker = {
  fecha: Faker.random.words(),
  direccion: Faker.random.words(),
  telefono: Faker.random.words(),
  fuente: Faker.random.words(),
  fecha2: Faker.random.words(),
  direccion2: Faker.random.words(),
  telefono2: Faker.random.words(),
  fuente2: Faker.random.words()
}

export {
  dataLastAddressesEmpty,
  dataLastAddressesFaker
}
