import * as Faker from 'faker'

const dataCompanyAssetsEUDBFREmpty = {
  clase: '',
  tipoactivo: '',
  unidades: '',
  comentarios: '',
  ajt1: '',
  ajt2: '',
  fechamod: '',
  codigocambio: '',
  comentariosajts: ''
}

const dataCompanyAssetsEUDBFRFaker = {
  clase: Faker.random.words(),
  tipoactivo: Faker.random.words(),
  unidades: Faker.random.number(9),
  comentarios: Faker.random.words(),
  ajt1: Faker.random.words(),
  ajt2: Faker.random.words(),
  fechamod: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  codigocambio: Faker.random.number(9),
  comentariosajts: Faker.random.words()
}

export {
  dataCompanyAssetsEUDBFREmpty,
  dataCompanyAssetsEUDBFRFaker
}
