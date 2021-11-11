import * as Faker from 'faker'

const dataExportsEmpty = {
  pais: '',
  porcentaje: ''
}

const dataExportsFaker = {
  pais: Faker.random.words(),
  porcentaje: Faker.random.words()
}

export {
  dataExportsEmpty,
  dataExportsFaker
}
