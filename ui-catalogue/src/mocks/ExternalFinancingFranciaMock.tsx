import * as Faker from 'faker'

const dataExternalFinancingFranciaEmpty = {
  fechaobtencionfinancacion: '',
  fechacancelacion: '',
  tipofinanciacion1: '',
  tipofinanciacion2: '',
  proveedorFondos: '',
  importe1: '',
  importe2: '',
  bienesusados: '',
  comentarios1: '',
  comentarios2: ''
}

const dataExternalFinancingFranciaFaker = {
  fechaobtencionfinancacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacancelacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  tipofinanciacion1: Faker.random.words(),
  tipofinanciacion2: Faker.random.words(),
  proveedorFondos: Faker.random.words(),
  importe1: Faker.random.words(),
  importe2: Faker.random.words(),
  bienesusados: Faker.random.words(),
  comentarios1: Faker.random.words(),
  comentarios2: Faker.random.words()
}

export {
  dataExternalFinancingFranciaEmpty,
  dataExternalFinancingFranciaFaker
}
