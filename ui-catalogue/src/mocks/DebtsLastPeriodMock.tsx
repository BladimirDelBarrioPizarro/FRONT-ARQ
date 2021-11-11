import * as Faker from 'faker'

const dataDebtsLastPeriodEmpty = {
  titlePeriod: '',
  entidadPeorCalificacion: '',
  entidadMayorDeudas: '',
  entidadMayorImporte: '',
  entidadMayorDiasRetraso: '',
  calificacionPeorCalificacion: '',
  calificacionMayorDeudas: '',
  calificacionMayorImporte: '',
  calificacionMayorDiasRetraso: '',
  sistemaFinancieroPeorCalificacion: '',
  sistemaFinancieroMayorDeudas: '',
  sistemaFinancieroMayorImporte: '',
  sistemaFinancieroMayorDiasRetraso: '',
  totalDeudaPeorCalificacion: '',
  totalDeudaMayorDeudas: '',
  totalDeudaMayorImporte: '',
  totalDeudaMayorDiasRetraso: ''
}

const dataDebtsLastPeriodFaker = {
  titlePeriod: Faker.random.words(),
  entidadPeorCalificacion: Faker.random.words(),
  entidadMayorDeudas: Faker.random.words(),
  entidadMayorImporte: Faker.random.words(),
  entidadMayorDiasRetraso: Faker.random.words(),
  calificacionPeorCalificacion: Faker.random.words(),
  calificacionMayorDeudas: Faker.random.words(),
  calificacionMayorImporte: Faker.random.words(),
  calificacionMayorDiasRetraso: Faker.random.words(),
  sistemaFinancieroPeorCalificacion: Faker.random.words(),
  sistemaFinancieroMayorDeudas: Faker.random.words(),
  sistemaFinancieroMayorImporte: Faker.random.words(),
  sistemaFinancieroMayorDiasRetraso: Faker.random.words(),
  totalDeudaPeorCalificacion: Faker.random.words(),
  totalDeudaMayorDeudas: Faker.random.words(),
  totalDeudaMayorImporte: Faker.random.words(),
  totalDeudaMayorDiasRetraso: Faker.random.words()
}

export {
  dataDebtsLastPeriodEmpty,
  dataDebtsLastPeriodFaker
}
