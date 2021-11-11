import * as Faker from 'faker'

const dataLegalFormFranciaEmpty = {
  situacionesConcursales: '',
  formajuridica1: '',
  formajuridica2: '',
  fecharegistroformajuridica: '',
  formajuridicainicial: '',
  fechainicialincorporacion1: '',
  fechainicialincorporacion2: '',
  tipoEmpresa1: '',
  tipoEmpresa2: '',
  statusActual1: '',
  statusActual2: '',
  fechacambioformajuridica1: '',
  fechacambioformajuridica2: ''
}

const dataLegalFormFranciaFaker = {
  situacionesConcursales: Faker.random.words(),
  formajuridica1: Faker.random.words(),
  formajuridica2: Faker.random.words(),
  fecharegistroformajuridica: Faker.random.words(),
  formajuridicainicial: Faker.random.words(),
  fechainicialincorporacion1: Faker.random.words(),
  fechainicialincorporacion2: Faker.random.words(),
  tipoEmpresa1: Faker.random.words(),
  tipoEmpresa2: Faker.random.words(),
  statusActual1: Faker.random.words(),
  statusActual2: Faker.random.words(),
  fechacambioformajuridica1: Faker.random.words(),
  fechacambioformajuridica2: Faker.random.words()
}

export {
  dataLegalFormFranciaEmpty,
  dataLegalFormFranciaFaker
}
