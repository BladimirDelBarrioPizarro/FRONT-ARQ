import * as Faker from 'faker'

const dataPreviousTradeNamesEmpty = {
  denominacion: '',
  fechainicio: '',
  fechacambiodenominacion: ''
}

const dataPreviousTradeNamesFaker = {
  denominacion: Faker.random.words(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacambiodenominacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataPreviousTradeNamesEmpty,
  dataPreviousTradeNamesFaker
}
