import * as Faker from 'faker'

const dataLegalProceduresFranciaEmpty = {
  entidad: '',
  fecha: '',
  tipoaccion: '',
  claseaccion: '',
  fechapublicacion: '',
  distrito: '',
  duracion: '',
  fechafinalizacion: '',
  fechaexpiracion: '',
  importe: '',
  costeslegales: '',
  moneda: '',
  situacion: '',
  resolucion: '',
  demandante1: '',
  demandante2: '',
  comentarios: '',
  tipoaccion2: '',
  claseaccion2: '',
  fuenteinformacion: '',
  input1: '',
  input2: ''
}

const dataLegalProceduresFranciaFaker = {
  entidad: Faker.random.words(),
  fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  tipoaccion: Faker.random.words(),
  claseaccion: Faker.random.words(),
  fechapublicacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  distrito: Faker.random.words(),
  duracion: Faker.random.words(),
  fechafinalizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaexpiracion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  importe: Faker.random.words(),
  costeslegales: Faker.random.words(),
  moneda: Faker.random.words(),
  situacion: Faker.random.words(),
  resolucion: Faker.random.words(),
  demandante1: Faker.random.words(),
  demandante2: Faker.random.words(),
  comentarios: Faker.random.words(),
  tipoaccion2: Faker.random.words(),
  claseaccion2: Faker.random.words(),
  fuenteinformacion: Faker.random.words(),
  input1: Faker.random.words(),
  input2: Faker.random.words()

}

export {
  dataLegalProceduresFranciaEmpty,
  dataLegalProceduresFranciaFaker
}
