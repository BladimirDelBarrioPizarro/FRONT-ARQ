import * as Faker from 'faker'

const dataDocumentRegistrationEmpty = {
  tiporegistro: '',
  fecharegistro: '',
  referencia: ''
}

const dataDocumentRegistrationFaker = {
  tiporegistro: Faker.random.words(),
  fecharegistro: Faker.random.words(),
  referencia: Faker.random.words()
}

export {
  dataDocumentRegistrationEmpty,
  dataDocumentRegistrationFaker
}
