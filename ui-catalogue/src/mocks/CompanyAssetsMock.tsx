import * as Faker from 'faker'

const dataCompanyAssetsEmpty = {
  clase: '',
  tipoactivo: '',
  unidades: '',
  comentarios: ''
}

const dataCompanyAssetsFaker = {
  clase: Faker.random.words(),
  tipoactivo: Faker.random.words(),
  unidades: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataCompanyAssetsEmpty,
  dataCompanyAssetsFaker
}
