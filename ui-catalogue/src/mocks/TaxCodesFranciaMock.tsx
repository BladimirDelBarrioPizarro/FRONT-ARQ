import * as Faker from 'faker'

const dataTaxCodesFranciaEmpty = {
  numerodun: '',
  fechaasignacion: '',
  fechacambio: ''
}

const dataTaxCodesFranciaFaker = {
  numerodun: Faker.random.words(),
  fechaasignacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacambio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataTaxCodesFranciaEmpty,
  dataTaxCodesFranciaFaker
}
