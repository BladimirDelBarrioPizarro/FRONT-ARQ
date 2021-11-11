import * as Faker from 'faker'

const datosSummaryExternalFinancingEmpty = {
  fechaactualizacion: '',
  periodo: '',
  tipofinanciacion: '',
  numerototal: '',
  importetotal1: '',
  financiacionreciente: '',
  numeroeventos: '',
  importetotal2: ''
}

const datosSummaryExternalFinancingFaker = {
  fechaactualizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  periodo: Faker.random.words(),
  tipofinanciacion: Faker.random.words(),
  numerototal: Faker.random.words(),
  importetotal1: Faker.random.words(),
  financiacionreciente: Faker.random.words(),
  numeroeventos: Faker.random.words(),
  importetotal2: Faker.random.words()
}

export {
  datosSummaryExternalFinancingEmpty,
  datosSummaryExternalFinancingFaker
}
