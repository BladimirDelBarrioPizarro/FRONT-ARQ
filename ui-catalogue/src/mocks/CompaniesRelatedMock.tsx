import * as Faker from 'faker'

const dataCompaniesRelatedEmpty = {
  nombre: '',
  tiporelacion: '',
  numeroidentificacion: '',
  tipoidentificacion: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  comentarios: '',
  bolsa: ''
}

const dataCompaniesRelatedFaker = {
  nombre: Faker.random.words(),
  tiporelacion: Faker.random.words(),
  numeroidentificacion: Faker.random.words(),
  tipoidentificacion: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  comentarios: Faker.random.words(),
  bolsa: Faker.random.words()
}

export {
  dataCompaniesRelatedEmpty,
  dataCompaniesRelatedFaker
}
