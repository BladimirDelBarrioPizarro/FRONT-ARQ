import * as Faker from 'faker'

const dataInformaDataEmpty = {
  numeroPeticion: '',
  codigoProducto: '',
  codNomEmpresa: '',
  tipoCorresponsal: '',
  numeroDocumento: '',
  tipoDocumento: '',
  numeroInforme: '',
  numeroMovimiento: '',
  origen: '',
  gravedadAjt: '',
  tipoFichero: '',
  nombreFichero: ''
}

const dataInformaDataFaker = {
  numeroPeticion: Faker.random.words(),
  codigoProducto: Faker.random.words(),
  codNomEmpresa: Faker.random.words(),
  tipoCorresponsal: Faker.random.words(),
  numeroDocumento: Faker.random.words(),
  tipoDocumento: Faker.random.words(),
  numeroInforme: Faker.random.words(),
  numeroMovimiento: Faker.random.words(),
  origen: Faker.random.words(),
  gravedadAjt: Faker.random.words(),
  tipoFichero: Faker.random.words(),
  nombreFichero: Faker.random.words()
}

export {
  dataInformaDataEmpty,
  dataInformaDataFaker
}
