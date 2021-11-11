import * as Faker from 'faker'

const dataAJTSPOAEmpty = {
  fechamodificacion: '',
  codigocambio: '',
  nombre: '',
  direccion: '',
  codigofiscal: '',
  formajuridica: '',
  comentarios: ''
}

const dataAJTSPOAFaker = {
  fechamodificacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  codigocambio: Faker.random.words(),
  nombre: Faker.random.words(),
  direccion: Faker.random.words(),
  codigofiscal: Faker.random.words(),
  formajuridica: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataAJTSPOAEmpty,
  dataAJTSPOAFaker
}
