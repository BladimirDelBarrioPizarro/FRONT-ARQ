import * as Faker from 'faker'

const dataGeneralDataEmpty = {
  agencia: '',
  codigo: '',
  razonSocial: '',
  codigoFiscal: '',
  ajt1: '',
  ajt2: '',
  remitente: '',
  nombreDocumento: '',
  tipoDocumento: '',
  fechaMensaje: '',
  fecha: '',
  fechaBusqueda: '',
  numeroDocumento: '',
  numeroPeticion: '',
  moneda: '',
  nombreFichero: ''
}

const dataGeneralDataFaker = {
  agencia: Faker.company.companyName(),
  codigo: Faker.random.words(),
  razonSocial: Faker.random.words(),
  codigoFiscal: Faker.random.words(),
  ajt1: Faker.random.words(),
  ajt2: Faker.random.words(),
  remitente: Faker.random.words(),
  nombreDocumento: Faker.random.words(),
  tipoDocumento: Faker.random.words(),
  fechaMensaje: Faker.random.words(),
  fecha: Faker.random.words(),
  fechaBusqueda: Faker.random.words(),
  numeroDocumento: Faker.random.words(),
  numeroPeticion: Faker.random.words(),
  moneda: Faker.random.words(),
  nombreFichero: Faker.random.words()
}

export {
  dataGeneralDataEmpty,
  dataGeneralDataFaker
}
