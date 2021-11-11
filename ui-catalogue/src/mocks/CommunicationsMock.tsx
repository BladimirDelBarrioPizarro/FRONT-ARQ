import * as Faker from 'faker'

const dataCommunicationsEmpty = {
  phone1: '',
  phone2: '',
  phone3: ''
}

const dataCommunicationsFaker = {
  phone1: Faker.random.number(9),
  phone2: Faker.random.number(9),
  phone3: Faker.random.number(9)
}

export {
  dataCommunicationsEmpty,
  dataCommunicationsFaker
}
