import * as Faker from 'faker'

const dataRatingFormEmpty = {
  fechaasignacion: '',
  formaasignacionrating: '',
  dbrating: '',
  indicador: '',
  observaciones: '',
  riesgo1: '',
  riesgo2: '',
  riesgo3: '',
  riesgo4: '',
  riesgo5: '',
  riesgo6: '',
  riesgo7: '',
  riesgo8: '',
  credito1: '',
  credito2: '',
  formaasignacioncredito: '',
  evaluacioncredito: '',
  otrosratings1: '',
  otrosratings2: '',
  valor1: '',
  valor2: ''
}

const dataRatingFormFaker = [
  {
    fechaasignacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    formaasignacionrating: Faker.random.words(),
    dbrating: Faker.random.words(),
    indicador: Faker.random.words(),
    observaciones: Faker.random.words(),
    riesgo1: Faker.random.words(),
    riesgo2: Faker.random.words(),
    riesgo3: Faker.random.words(),
    riesgo4: Faker.random.words(),
    riesgo5: Faker.random.words(),
    riesgo6: Faker.random.words(),
    riesgo7: Faker.random.words(),
    riesgo8: Faker.random.words(),
    credito1: Faker.random.words(),
    credito2: Faker.random.words(),
    formaasignacioncredito: Faker.random.words(),
    evaluacioncredito: Faker.random.words(),
    otrosratings1: Faker.random.words(),
    otrosratings2: Faker.random.words(),
    valor1: Faker.random.words(),
    valor2: Faker.random.words()
  },
  {
    fechaasignacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    formaasignacionrating: Faker.random.words(),
    dbrating: Faker.random.words(),
    indicador: Faker.random.words(),
    observaciones: Faker.random.words(),
    riesgo1: Faker.random.words(),
    riesgo2: Faker.random.words(),
    riesgo3: Faker.random.words(),
    riesgo4: Faker.random.words(),
    riesgo5: Faker.random.words(),
    riesgo6: Faker.random.words(),
    riesgo7: Faker.random.words(),
    riesgo8: Faker.random.words(),
    credito1: Faker.random.words(),
    credito2: Faker.random.words(),
    formaasignacioncredito: Faker.random.words(),
    evaluacioncredito: Faker.random.words(),
    otrosratings1: Faker.random.words(),
    otrosratings2: Faker.random.words(),
    valor1: Faker.random.words(),
    valor2: Faker.random.words()
  },
  {
    fechaasignacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    formaasignacionrating: Faker.random.words(),
    dbrating: Faker.random.words(),
    indicador: Faker.random.words(),
    observaciones: Faker.random.words(),
    riesgo1: Faker.random.words(),
    riesgo2: Faker.random.words(),
    riesgo3: Faker.random.words(),
    riesgo4: Faker.random.words(),
    riesgo5: Faker.random.words(),
    riesgo6: Faker.random.words(),
    riesgo7: Faker.random.words(),
    riesgo8: Faker.random.words(),
    credito1: Faker.random.words(),
    credito2: Faker.random.words(),
    formaasignacioncredito: Faker.random.words(),
    evaluacioncredito: Faker.random.words(),
    otrosratings1: Faker.random.words(),
    otrosratings2: Faker.random.words(),
    valor1: Faker.random.words(),
    valor2: Faker.random.words()
  },
  {
    fechaasignacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    formaasignacionrating: Faker.random.words(),
    dbrating: Faker.random.words(),
    indicador: Faker.random.words(),
    observaciones: Faker.random.words(),
    riesgo1: Faker.random.words(),
    riesgo2: Faker.random.words(),
    riesgo3: Faker.random.words(),
    riesgo4: Faker.random.words(),
    riesgo5: Faker.random.words(),
    riesgo6: Faker.random.words(),
    riesgo7: Faker.random.words(),
    riesgo8: Faker.random.words(),
    credito1: Faker.random.words(),
    credito2: Faker.random.words(),
    formaasignacioncredito: Faker.random.words(),
    evaluacioncredito: Faker.random.words(),
    otrosratings1: Faker.random.words(),
    otrosratings2: Faker.random.words(),
    valor1: Faker.random.words(),
    valor2: Faker.random.words()
  }
]
export {
  dataRatingFormEmpty,
  dataRatingFormFaker
}