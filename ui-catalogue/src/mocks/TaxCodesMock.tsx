import * as Faker from 'faker'

const dataTaxCodesEmpty = {
  numDum: '',
  fechaAsignacion1: '',
  fechaAsignacion12: '',
  fechaAsignacion13: '',
  fechaCambio1: '',
  fechaCambio12: '',
  fechaCambio13: '',
  fechaAsignacion2: '',
  fechaAsignacion22: '',
  fechaAsignacion23: '',
  fechaCambio2: '',
  fechaCambio22: '',
  fechaCambio23: '',
  fechaAsignacion3: '',
  fechaAsignacion32: '',
  fechaAsignacion33: '',
  fechaCambio3: '',
  fechaCambio32: '',
  fechaCambio33: '',
  fechaAsignacion4: '',
  fechaAsignacion42: '',
  fechaAsignacion43: '',
  fechaCambio4: '',
  fechaCambio42: '',
  fechaCambio43: '',
  tipoIdentificacion: '',
  numeroIdentificacion: ''
}

const dataTaxCodesFaker = {
  numDum: Faker.random.number(9),
  fechaAsignacion1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion12: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion13: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio12: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio13: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion22: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion23: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio22: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio23: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion3: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion32: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion33: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio3: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio32: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio33: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion4: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion42: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaAsignacion43: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio4: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio42: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaCambio43: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  tipoIdentificacion: Faker.random.words(),
  numeroIdentificacion: Faker.random.words()
}

export {
  dataTaxCodesEmpty,
  dataTaxCodesFaker
}
