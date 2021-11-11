import * as Faker from 'faker'

const dataNonPaymentBadexcugEmpty = {
  nombreRazonSocial: '',
  identificadorPersona: '',
  fechaAlta: '',
  fechaUltimaAct: '',
  fechaUltimaConsulta: '',
  entidadUltConsulta: '',
  numeroOperaciones: '',
  importeOperaciones: '',
  operIncidencias: '',
  cuotasImpagadas: '',
  importeImpagado: '',
  peorSituacion: '',
  fechaPeorSituacion: '',
  importeAnotacionMax: '',
  fechaAnotacionMax: ''
}

const dataNonPaymentBadexcugFaker = {
  nombreRazonSocial: Faker.random.words(),
  identificadorPersona: Faker.random.words(),
  fechaAlta: Faker.random.words(),
  fechaUltimaAct: Faker.random.words(),
  fechaUltimaConsulta: Faker.random.words(),
  entidadUltConsulta: Faker.random.words(),
  numeroOperaciones: Faker.random.words(),
  importeOperaciones: Faker.random.words(),
  operIncidencias: Faker.random.words(),
  cuotasImpagadas: Faker.random.words(),
  importeImpagado: Faker.random.words(),
  peorSituacion: Faker.random.words(),
  fechaPeorSituacion: Faker.random.words(),
  importeAnotacionMax: Faker.random.words(),
  fechaAnotacionMax: Faker.random.words()
}

const dataOperationCodeBadexcugEmpty = [
  {
    codigoOperacion: '',
    identificadorPersona: '',
    fechaAlta: '',
    entidadCedente: '',
    producto: '',
    naturaleza: '',
    situacion: '',
    fechaInicio: '',
    fechaFinal: '',
    numeroCuotas: '',
    importeCuotas: '',
    importePendiente: '',
    importeImpagado: '',
    numCuotasImpagadas: '',
    fechaPrimerVencimiento: '',
    fechaUltimoVencimiento: '',
    informacionAdicional: ''
  },
  {
    codigoOperacion: '',
    identificadorPersona: '',
    fechaAlta: '',
    entidadCedente: '',
    producto: '',
    naturaleza: '',
    situacion: '',
    fechaInicio: '',
    fechaFinal: '',
    numeroCuotas: '',
    importeCuotas: '',
    importePendiente: '',
    importeImpagado: '',
    numCuotasImpagadas: '',
    fechaPrimerVencimiento: '',
    fechaUltimoVencimiento: '',
    informacionAdicional: ''
  }
]

const dataOperationCodeBadexcugFaker = [
  {
    codigoOperacion: Faker.random.number(999999),
    identificadorPersona: Faker.random.words(),
    fechaAlta: Faker.random.words(),
    entidadCedente: Faker.random.words(),
    producto: Faker.random.words(),
    naturaleza: Faker.random.words(),
    situacion: Faker.random.words(),
    fechaInicio: Faker.random.words(),
    fechaFinal: Faker.random.words(),
    numeroCuotas: Faker.random.words(),
    importeCuotas: Faker.random.words(),
    importePendiente: Faker.random.words(),
    importeImpagado: Faker.random.words(),
    numCuotasImpagadas: Faker.random.words(),
    fechaPrimerVencimiento: Faker.random.words(),
    fechaUltimoVencimiento: Faker.random.words(),
    informacionAdicional: Faker.random.words()
  },
  {
    codigoOperacion: Faker.random.number(999999),
    identificadorPersona: Faker.random.words(),
    fechaAlta: Faker.random.words(),
    entidadCedente: Faker.random.words(),
    producto: Faker.random.words(),
    naturaleza: Faker.random.words(),
    situacion: Faker.random.words(),
    fechaInicio: Faker.random.words(),
    fechaFinal: Faker.random.words(),
    numeroCuotas: Faker.random.words(),
    importeCuotas: Faker.random.words(),
    importePendiente: Faker.random.words(),
    importeImpagado: Faker.random.words(),
    numCuotasImpagadas: Faker.random.words(),
    fechaPrimerVencimiento: Faker.random.words(),
    fechaUltimoVencimiento: Faker.random.words(),
    informacionAdicional: Faker.random.words()
  }
]

const dataProtestsDemandsEmpty = {
  incidencia: '',
  tipo: '',
  fecha: '',
  incidencias: '',
  importeIncidencias: '',
  nonPayment: dataNonPaymentBadexcugEmpty,
  operationcode: dataOperationCodeBadexcugEmpty
}

const dataProtestsDemandsFaker = {
  incidencia: Faker.random.words(),
  tipo: Faker.random.words(),
  fecha: Faker.random.words(),
  incidencias: Faker.random.words(),
  importeIncidencias: Faker.random.words(),
  nonPayment: dataNonPaymentBadexcugFaker,
  operationsCode: dataOperationCodeBadexcugFaker
}

export {
  dataNonPaymentBadexcugEmpty,
  dataNonPaymentBadexcugFaker,
  dataOperationCodeBadexcugEmpty,
  dataOperationCodeBadexcugFaker,
  dataProtestsDemandsEmpty,
  dataProtestsDemandsFaker
}
