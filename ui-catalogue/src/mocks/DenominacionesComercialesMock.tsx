import * as Faker from 'faker'

const dataDenominacionesComercialesEmpty = {
  codigoFiscal: '',
  telefono: '',
  email: '',
  actividades: '',
  comentarios: '',
  nif: '',
  fax: '',
  web: ''
}

const dataDenominacionesComercialesFaker = {
  codigoFiscal: Faker.random.words(),
  telefono: Faker.random.words(),
  email: Faker.random.words(),
  actividades: Faker.random.words(),
  comentarios: Faker.random.words(),
  nif: Faker.random.words(),
  fax: Faker.random.words(),
  web: Faker.random.words()
}

export {
  dataDenominacionesComercialesEmpty,
  dataDenominacionesComercialesFaker
}
