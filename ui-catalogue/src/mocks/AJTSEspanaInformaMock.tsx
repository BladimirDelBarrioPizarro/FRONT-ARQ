import * as Faker from 'faker'

const dataAJTSEspanaInformaEmpty = {
  tipoderespuesta: '',
  escort: '',
  fechaconstitucion: '',
  balance: '',
  deposito: '',
  negativa: '',
  compromiso: '',
  incidentes: '',
  pagos: '',
  experiencia: '',
  documentos: ''
}

const dataAJTSEspanaInformaFaker = {
  tipoderespuesta: Faker.random.words(),
  escort: Faker.random.words(),
  fechaconstitucion: Faker.random.words(),
  balance: Faker.random.words(),
  deposito: Faker.random.words(),
  negativa: Faker.random.words(),
  compromiso: Faker.random.words(),
  incidentes: Faker.random.words(),
  pagos: Faker.random.words(),
  experiencia: Faker.random.words(),
  documentos: Faker.random.words()
}

export {
  dataAJTSEspanaInformaEmpty,
  dataAJTSEspanaInformaFaker
}
