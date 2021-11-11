import * as Faker from 'faker'

const dataPrimaryResidenceEmpty = {
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  comentarios: '',
  bolsa: ''
}

const dataPrimaryResidenceFaker = {
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  comentarios: Faker.random.words(),
  bolsa: Faker.random.words()
}

export {
  dataPrimaryResidenceEmpty,
  dataPrimaryResidenceFaker
}
