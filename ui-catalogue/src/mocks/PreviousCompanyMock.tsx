import * as Faker from 'faker'

const dataPreviousCompanyEmpty = {
  nombre: '',
  comentarios: '',
  bolsa: ''
}

const dataPreviousCompanyFaker = {
  nombre: Faker.random.words(),
  comentarios: Faker.random.words(),
  bolsa: Faker.random.words()
}

export {
  dataPreviousCompanyEmpty,
  dataPreviousCompanyFaker
}
