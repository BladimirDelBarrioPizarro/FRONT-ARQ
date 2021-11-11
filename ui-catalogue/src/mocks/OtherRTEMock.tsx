import * as Faker from 'faker'

const dataOtherRTEEmpty = {
  codigoRTE: '',
  valorRTE: ''
}

const dataOtherRTEFaker = {
  codigoRTE: Faker.random.words(),
  valorRTE: Faker.random.words()
}

export {
  dataOtherRTEEmpty,
  dataOtherRTEFaker
}
