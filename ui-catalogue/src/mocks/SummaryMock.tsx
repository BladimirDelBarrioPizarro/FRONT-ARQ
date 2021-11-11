import * as Faker from 'faker'

const dataSummaryEmpty = {
  formaJuridica: '',
  anteriorFormaJuríd: '',
  fechaConstrucción: '',
  fechaFormaJurídica: '',
  estadoActual: '',
  fechaEstadoActual: '',
  fechaInicioActividad: '',
  estadoActualMope: '',
  comentarios: '',
  terminosVenta: ''
}

const dataSummaryFaker = {
  formaJuridica: Faker.random.words(),
  anteriorFormaJuríd: Faker.random.words(),
  fechaConstrucción: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaFormaJurídica: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  estadoActual: Faker.random.words(),
  fechaEstadoActual: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaInicioActividad: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  estadoActualMope: Faker.random.words(),
  comentarios: Faker.random.words(),
  terminosVenta: Faker.random.words()
}

export {
  dataSummaryEmpty,
  dataSummaryFaker
}
