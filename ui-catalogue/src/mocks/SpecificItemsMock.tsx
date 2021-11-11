import * as Faker from 'faker'

const dataSpecificItemsEmpty = {
  cotationAlfa: '',
  descCotationalfa: '',
  motifNote: '',
  descMotifNote: '',
  cessationActivite: '',
  incidents: '',
  ventasEstimadas: ''
}

const dataSpecificItemsFaker = {
  cotationAlfa: Faker.random.words(),
  descCotationalfa: Faker.random.words(),
  motifNote: Faker.random.words(),
  descMotifNote: Faker.random.words(),
  cessationActivite: Faker.random.words(),
  incidents: Faker.random.words(),
  ventasEstimadas: Faker.random.words()
}

export {
  dataSpecificItemsEmpty,
  dataSpecificItemsFaker
}
