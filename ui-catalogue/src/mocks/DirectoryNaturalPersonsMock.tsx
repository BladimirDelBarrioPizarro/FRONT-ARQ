import * as Faker from 'faker'

const dataDirectoryNaturalPersonsEmpty = {
  codigoFiscal: '',
  tipoDocumento: '',
  denominacion: '',
  fechaDeNacimiento: '',
  estadoCivil: '',
  nacionalidad: '',
  gradoInstruccion: '',
  telefono: '',
  ocupacion: ''
}

const dataDirectoryNaturalPersonsFaker = {
  codigoFiscal: Faker.random.words(),
  tipoDocumento: Faker.random.words(),
  denominacion: Faker.random.words(),
  fechaDeNacimiento: Faker.random.words(),
  estadoCivil: Faker.random.words(),
  nacionalidad: Faker.random.words(),
  gradoInstruccion: Faker.random.words(),
  telefono: Faker.random.words(),
  ocupacion: Faker.random.words()
}

export {
  dataDirectoryNaturalPersonsEmpty,
  dataDirectoryNaturalPersonsFaker
}
