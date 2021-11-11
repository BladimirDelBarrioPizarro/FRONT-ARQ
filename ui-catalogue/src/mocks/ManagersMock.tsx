import * as Faker from 'faker'

const dataManagersEmpty = {
  nombre: '',
  numeroidentificacion: '',
  cargo: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  porcentajeparticipacion: ''
}

const dataManagersFaker = {
  nombre: Faker.random.words(),
  numeroidentificacion: Faker.random.words(),
  cargo: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  porcentajeparticipacion: Faker.random.words()
}

export {
  dataManagersEmpty,
  dataManagersFaker
}
