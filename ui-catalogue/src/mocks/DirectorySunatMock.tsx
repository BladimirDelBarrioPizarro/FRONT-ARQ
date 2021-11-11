import * as Faker from 'faker'

const dataDirectorySunatEmpty = {
  codigoFiscal: '',
  denominacion: '',
  nombreComercial: '',
  direccion: '',
  fechaConstitución: '',
  tipoDeContribuyente: '',
  estado: '',
  condicionContribuyente: '',
  dependencia: '',
  actividad: '',
  actividadComercioExterior: '',
  padron: ''
}

const dataDirectorySunatFaker = {
  codigoFiscal: Faker.random.words(),
  denominacion: Faker.random.words(),
  nombreComercial: Faker.random.words(),
  direccion: Faker.random.words(),
  fechaConstitución: Faker.random.words(),
  tipoDeContribuyente: Faker.random.words(),
  estado: Faker.random.words(),
  condicionContribuyente: Faker.random.words(),
  dependencia: Faker.random.words(),
  actividad: Faker.random.words(),
  actividadComercioExterior: Faker.random.words(),
  padron: Faker.random.words()
}

export {
  dataDirectorySunatEmpty,
  dataDirectorySunatFaker
}
