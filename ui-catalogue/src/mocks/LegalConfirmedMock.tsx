import * as Faker from 'faker'

const dataLegalConfirmedEmpty = {
  fecha: '',
  periodo: '',
  tipoaccion: '',
  claseaccion: '',
  nprocedimientos: '',
  importe: '',
  procedimientoLegal: ''
}

const dataLegalConfirmedFaker = [
  {
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    periodo: Faker.random.words(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    nprocedimientos: Faker.random.words(),
    importe: Faker.random.words(),
    procedimientoLegal: Faker.random.words()
  },
  {
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    periodo: Faker.random.words(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    nprocedimientos: Faker.random.words(),
    importe: Faker.random.words(),
    procedimientoLegal: Faker.random.words()
  },
  {
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    periodo: Faker.random.words(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    nprocedimientos: Faker.random.words(),
    importe: Faker.random.words(),
    procedimientoLegal: Faker.random.words()
  }
]
export {
  dataLegalConfirmedEmpty,
  dataLegalConfirmedFaker
}
