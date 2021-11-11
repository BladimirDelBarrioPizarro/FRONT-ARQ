import * as Faker from 'faker'

const datosHostDataEmpty = {
  organizacion: '',
  numeroPeticion: '',
  nomCorresponsal: '',
  codProducto: '',
  codEmpresa: '',
  tipoCorresponsal: '',
  numeroDocumento: '',
  numeroInforme: '',
  origen: '',
  tipoFichero: '',
  tipoDocumento: '',
  numeroMovimiento: '',
  gravedad: '',
  nombreFichero: ''
}

const datosHostDataFaker = {
  organizacion: Faker.random.words(),
  numeroPeticion: Faker.random.words(),
  nomCorresponsal: Faker.random.words(),
  codProducto: Faker.random.words(),
  codEmpresa: Faker.random.words(),
  tipoCorresponsal: Faker.random.words(),
  numeroDocumento: Faker.random.words(),
  numeroInforme: Faker.random.words(),
  origen: Faker.random.words(),
  tipoFichero: Faker.random.words(),
  tipoDocumento: Faker.random.words(),
  numeroMovimiento: Faker.random.words(),
  gravedad: Faker.random.words(),
  nombreFichero: Faker.random.words()
}

export {
  datosHostDataEmpty,
  datosHostDataFaker
}
