import * as Faker from 'faker'

const dataLegalFormEmpty = {
  concursales: '',
  formajuridica1: '',
  formajuridica2: '',
  formajuridicainicial1: '',
  formajuridicainicial2: '',
  fecharegistro: '',
  fechainicial: ''
}

const dataLegalFormFaker = {
  concursales: Faker.random.words(),
  formajuridica1: Faker.random.words(),
  formajuridica2: Faker.random.words(),
  formajuridicainicial1: Faker.random.words(),
  formajuridicainicial2: Faker.random.words(),
  fecharegistro: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechainicial: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataLegalFormEmpty,
  dataLegalFormFaker
}
