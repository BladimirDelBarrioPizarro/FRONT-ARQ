import * as Faker from 'faker'

const dataTaxCodesEUDBPEmpty = {
  codigo: ''
}

const dataTaxCodesEUDBPFaker = {
  codigo: Faker.random.words()
}

export {
  dataTaxCodesEUDBPEmpty,
  dataTaxCodesEUDBPFaker
}
