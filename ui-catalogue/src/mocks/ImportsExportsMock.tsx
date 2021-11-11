import * as Faker from 'faker'

const dataImportsExportsEmpty = {
  importaciones: '',
  paises: '',
  producto: '',
  exportaciones: '',
  paises2: ''
}

const dataImportsExportsFaker = {
  importaciones: Faker.random.words(),
  paises: Faker.random.words(),
  producto: Faker.random.words(),
  exportaciones: Faker.random.words(),
  paises2: Faker.random.words()
}

export {
  dataImportsExportsEmpty,
  dataImportsExportsFaker
}
