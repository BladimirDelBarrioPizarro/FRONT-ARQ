import * as Faker from 'faker'

const dataNaceSicEmpty = {
  codigoSIC: '',
  descripcionSIC: '',
  codigoNACE: '',
  descripcionNACE: ''
}

const dataNaceSicFaker = {
  codigoSIC: Faker.random.words(),
  descripcionSIC: Faker.random.words(),
  codigoNACE: Faker.random.words(),
  descripcionNACE: Faker.random.words()
}

export {
  dataNaceSicEmpty,
  dataNaceSicFaker
}
