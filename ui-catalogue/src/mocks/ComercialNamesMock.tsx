import * as Faker from 'faker'

const dataComercialNamesEmpty = {
  nombre: ''
}

const dataComercialNamesFaker = {
  nombre: Faker.random.words()
}

export {
  dataComercialNamesEmpty,
  dataComercialNamesFaker
}
