import * as Faker from 'faker'

const debsReportedInfoCorpSicomsEmpty = {
  ultimoperiodo: '',
  cantidadensoles: '',
  montoensoles: '',
  cantidadendolares: '',
  montoendolares: '',
  fechavencimiento: '',
  fechareportada: '',
  montodivisa: '',
  acreedor: '',
  tipodeudor: ''
}

const debsReportedInfoCorpSicomsFaker = {
  ultimoperiodo: Faker.random.words(),
  cantidadensoles: Faker.random.words(),
  montoensoles: Faker.random.words(),
  cantidadendolares: Faker.random.words(),
  montoendolares: Faker.random.words(),
  fechavencimiento: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechareportada: Faker.random.words(),
  montodivisa: Faker.random.words(),
  acreedor: Faker.random.words(),
  tipodeudor: Faker.random.words()
}

const negativeSunatEmpty = {
  fechacobranzareciente: '',
  cantidadtotal: '',
  montototal: '',
  fechacobranza: '',
  fechaproceso: '',
  monto: '',
  tipo: '',
  dependencia: ''
}

const negativeSunatFaker = {
  fechacobranzareciente: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  cantidadtotal: Faker.random.words(),
  montototal: Faker.random.words(),
  fechacobranza: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaproceso: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  monto: Faker.random.words(),
  tipo: Faker.random.words(),
  dependencia: Faker.random.words()
}

const omissionEmpty = {
  cantidad: '',
  fechaomision: '',
  fechaproceso: '',
  concepto: ''
}

const omissionFaker = {
  cantidad: Faker.random.words(),
  fechaomision: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaproceso: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  concepto: Faker.random.words()
}

const protestBulletinEmpty = {
  ultimoperiodoAclarado: '',
  cantidadensolesAclarado: '',
  montoensolesAclarado: '',
  cantidadendolaresAclarado: '',
  montoendolaresAclarado: '',
  fechavencimientoAclarado: '',
  fechaaclaracionAclarado: '',
  montodivisaAclarado: '',
  tipodocumentoAclarado: '',
  notaríaAclarado: '',
  emisordocumentoAclarado: '',

  ultimoperiodoNoAclarado: '',
  cantidadensolesNoAclarado: '',
  montoensolesNoAclarado: '',
  cantidadendolaresNoAclarado: '',
  montoendolaresNoAclarado: '',
  fechavencimientoNoAclarado: '',
  fechaaclaracionNoAclarado: '',
  montodivisaNoAclarado: '',
  tipodocumentoNoAclarado: '',
  notaríaNoAclarado: '',
  emisordocumentoNoAclarado: ''
}

const protestBulletinFaker = {
  ultimoperiodoAclarado: Faker.random.words(),
  cantidadensolesAclarado: Faker.random.words(),
  montoensolesAclarado: Faker.random.words(),
  cantidadendolaresAclarado: Faker.random.words(),
  montoendolaresAclarado: Faker.random.words(),
  fechavencimientoAclarado: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaaclaracionAclarado: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  montodivisaAclarado: Faker.random.words(),
  tipodocumentoAclarado: Faker.random.words(),
  notaríaAclarado: Faker.random.words(),
  emisordocumentoAclarado: Faker.random.words(),

  ultimoperiodoNoAclarado: Faker.random.words(),
  cantidadensolesNoAclarado: Faker.random.words(),
  montoensolesNoAclarado: Faker.random.words(),
  cantidadendolaresNoAclarado: Faker.random.words(),
  montoendolaresNoAclarado: Faker.random.words(),
  fechavencimientoNoAclarado: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaaclaracionNoAclarado: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  montodivisaNoAclarado: Faker.random.words(),
  tipodocumentoNoAclarado: Faker.random.words(),
  notaríaNoAclarado: Faker.random.words(),
  emisordocumentoNoAclarado: Faker.random.words()
}

const voidedCardsEmpty = {
  fechafin: '',
  fechainicio: '',
  numerototal: ''
}

const voidedCardsFaker = {
  fechafin: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numerototal: Faker.random.words()
}

const canceledAccountsEmpty = {
  fechafin: '',
  fechainicio: '',
  numerototal: ''
}

const canceledAccountsFaker = {
  fechafin: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numerototal: Faker.random.words()
}

const dataOtherUnpaidDebtsEmpty = {
  debtsReportedInfoCorpSicom: debsReportedInfoCorpSicomsEmpty,
  negativeSunat: negativeSunatEmpty,
  omission: omissionEmpty,
  protestBulletin: protestBulletinEmpty,
  voidedCards: voidedCardsEmpty,
  canceledAccounts: canceledAccountsEmpty
}

const dataOtherUnpaidDebtsFaker = {
  debtsReportedInfoCorpSicom: debsReportedInfoCorpSicomsFaker,
  negativeSunat: negativeSunatFaker,
  omission: omissionFaker,
  protestBulletin: protestBulletinFaker,
  voidedCards: voidedCardsFaker,
  canceledAccounts: canceledAccountsFaker

}

export {
  dataOtherUnpaidDebtsEmpty,
  dataOtherUnpaidDebtsFaker
}
