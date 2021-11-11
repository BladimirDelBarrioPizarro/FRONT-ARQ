import * as Faker from 'faker'

const dataPreviousCompanyFranciaEmpty = {
  denominacion: '',
  fechainicio: '',
  fechacambiodenominacion: '',
  endindicator: ''
}

const dataPreviousCompanyFranciaFaker = {
  denominacion: Faker.random.words(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacambiodenominacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  endindicator: Faker.random.words()
}

export {
  dataPreviousCompanyFranciaEmpty,
  dataPreviousCompanyFranciaFaker
}
