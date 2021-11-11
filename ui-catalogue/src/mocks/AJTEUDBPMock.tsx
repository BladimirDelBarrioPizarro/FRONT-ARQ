import * as Faker from 'faker'

const dataAJTEUDBPEmpty = {
  ajtmayorgravedad: '',
  ajtmayorgravedadbis: ''
}

const dataAJTEUDBPFaker = {
  ajtmayorgravedad: Faker.random.words(),
  ajtmayorgravedadbis: Faker.random.words()
}

export {
  dataAJTEUDBPEmpty,
  dataAJTEUDBPFaker
}
