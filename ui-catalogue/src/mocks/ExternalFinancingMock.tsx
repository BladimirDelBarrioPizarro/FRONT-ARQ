import * as Faker from 'faker'

const dataExternalFinancingEmpty = {
  fechamodificacion1: '',
  fechamodificacion2: '',
  codigocambio: '',
  comentarios: ''
}

const dataExternalFinancingFaker = {
  fechamodificacion1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechamodificacion2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  codigocambio: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataExternalFinancingEmpty,
  dataExternalFinancingFaker
}
