import * as Faker from 'faker'

const dataLegalProceduresEmpty = [
  {
    entidad: '',
    fecha: '',
    tipoaccion: '',
    claseaccion: '',
    fechapublicacion: '',
    distrito: '',
    duracion: '',
    fechafinalizacion: '',
    importe: '',
    costes: '',
    situacion: '',
    resolucion: '',
    moneda: '',
    demandante: '',
    comentarios: ''
  },
  {
    entidad: '',
    fecha: '',
    tipoaccion: '',
    claseaccion: '',
    fechapublicacion: '',
    distrito: '',
    duracion: '',
    fechafinalizacion: '',
    importe: '',
    costes: '',
    situacion: '',
    resolucion: '',
    moneda: '',
    demandante: '',
    comentarios: ''
  },
  {
    entidad: '',
    fecha: '',
    tipoaccion: '',
    claseaccion: '',
    fechapublicacion: '',
    distrito: '',
    duracion: '',
    fechafinalizacion: '',
    importe: '',
    costes: '',
    situacion: '',
    resolucion: '',
    moneda: '',
    demandante: '',
    comentarios: ''
  }
]

const dataLegalProceduresFaker = [
  {
    entidad: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    fechapublicacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    distrito: Faker.random.words(),
    duracion: Faker.random.words(),
    fechafinalizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    importe: Faker.random.words(),
    costes: Faker.random.words(),
    situacion: Faker.random.words(),
    resolucion: Faker.random.words(),
    moneda: Faker.random.words(),
    demandante: Faker.random.words(),
    comentarios: Faker.random.words()
  },
  {
    entidad: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    fechapublicacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    distrito: Faker.random.words(),
    duracion: Faker.random.words(),
    fechafinalizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    importe: Faker.random.words(),
    costes: Faker.random.words(),
    situacion: Faker.random.words(),
    resolucion: Faker.random.words(),
    moneda: Faker.random.words(),
    demandante: Faker.random.words(),
    comentarios: Faker.random.words()
  },
  {
    entidad: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    tipoaccion: Faker.random.words(),
    claseaccion: Faker.random.words(),
    fechapublicacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    distrito: Faker.random.words(),
    duracion: Faker.random.words(),
    fechafinalizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    importe: Faker.random.words(),
    costes: Faker.random.words(),
    situacion: Faker.random.words(),
    resolucion: Faker.random.words(),
    moneda: Faker.random.words(),
    demandante: Faker.random.words(),
    comentarios: Faker.random.words()
  }
]

export {
  dataLegalProceduresEmpty,
  dataLegalProceduresFaker
}
