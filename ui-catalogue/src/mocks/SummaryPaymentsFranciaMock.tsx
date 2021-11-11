import * as Faker from 'faker'

const dataSummaryPaymentsFranciaEmpty = {
  fechacalculo: '',
  periodoconsiderado: '',
  numproveedores: '',
  numerotransaccionescomerciales: '',
  importetotaltransacciones: '',
  importeretrasado: '',
  moneda: '',
  comportamientoenpagos: '',
  numerotransaccionescomerciales2: '',
  promediominimo: '',
  promediomaximo: '',
  importe: '',
  moneda2: ''
}

const dataSummaryPaymentsFranciaFaker = {
  fechacalculo: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  periodoconsiderado: Faker.random.words(),
  numproveedores: Faker.random.words(),
  numerotransaccionescomerciales: Faker.random.words(),
  importetotaltransacciones: Faker.random.words(),
  importeretrasado: Faker.random.words(),
  moneda: Faker.random.words(),
  comportamientoenpagos: Faker.random.words(),
  numerotransaccionescomerciales2: Faker.random.words(),
  promediominimo: Faker.random.words(),
  promediomaximo: Faker.random.words(),
  importe: Faker.random.words(),
  moneda2: Faker.random.words()
}

export {
  dataSummaryPaymentsFranciaEmpty,
  dataSummaryPaymentsFranciaFaker
}
