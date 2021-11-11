import * as Faker from 'faker'

const dataSummarySourcesFranciaEmpty = {
  fechaactualizacion: '',
  periodoanalizado: '',
  tipofinanciacion: '',
  numerototal: '',
  importetotal1: '',
  financiacionreciente: '',
  situacionactual: '',
  numeroeventossituacion: '',
  importetotal2: ''
}

const dataSummarySourcesFranciaFaker = {
  fechaactualizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  periodoanalizado: Faker.random.words(),
  tipofinanciacion: Faker.random.words(),
  numerototal: Faker.random.words(),
  importetotal1: Faker.random.words(),
  financiacionreciente: Faker.random.words(),
  situacionactual: Faker.random.words(),
  numeroeventossituacion: Faker.random.words(),
  importetotal2: Faker.random.words()
}

export {
  dataSummarySourcesFranciaEmpty,
  dataSummarySourcesFranciaFaker
}
