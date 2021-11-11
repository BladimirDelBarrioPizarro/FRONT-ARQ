import * as Faker from 'faker'

const dataBasicDataEmpty = {
  organizacion: '',
  fecha: '',
  constitucion: '',
  mes: '',
  tipoempresa: '',
  tipofirma: '',
  status: '',
  fechastatus: '',
  capitalNominal: '',
  capNominalAnterior: '',
  capitalDesembolsado: '',
  fechaCambioCapital: '',
  fechaUltimoBalance: '',
  resultados: '',
  moneda: '',
  cifras: '',
  facturación: '',
  empleados: '',
  comentarios: ''
}

const dataBasicDataFaker = {
  organizacion: Faker.random.words(),
  fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  constitucion: Faker.random.words(),
  mes: Faker.random.words(),
  tipoempresa: Faker.random.words(),
  tipofirma: Faker.random.words(),
  status: Faker.random.words(),
  fechastatus: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  capitalNominal: Faker.random.words(),
  capNominalAnterior: Faker.random.words(),
  capitalDesembolsado: Faker.random.words(),
  fechaCambioCapital: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaUltimoBalance: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  resultados: Faker.random.words(),
  moneda: Faker.random.words(),
  cifras: Faker.random.words(),
  facturación: Faker.random.words(),
  empleados: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataBasicDataEmpty,
  dataBasicDataFaker
}
