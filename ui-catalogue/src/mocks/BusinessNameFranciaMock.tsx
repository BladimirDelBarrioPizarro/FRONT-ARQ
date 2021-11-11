import * as Faker from 'faker'

const dataBussinessNameFranciaEmpty = {
  denominacion: '',
  fechainicio: ''
}

const dataBussinessNameFranciaFaker = {
  denominacion: Faker.random.words(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataBussinessNameFranciaEmpty,
  dataBussinessNameFranciaFaker
}
