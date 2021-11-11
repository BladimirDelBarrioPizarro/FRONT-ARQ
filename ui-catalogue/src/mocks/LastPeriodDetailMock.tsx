import * as Faker from 'faker'

const dataLastPeriodDetailEmpty = {
  ultimoPeriodo: '',
  nroEntidades: '',
  totalCreditosVigentes: '',
  totalCreditosVencidos: '',
  peorCalificacion: '',
  totalCreditosRefinanciados: '',
  totalCreditosJudiciales: ''
}

const dataLastPeriodDetailFaker = {
  ultimoPeriodo: Faker.random.words(),
  nroEntidades: Faker.random.words(),
  totalCreditosVigentes: Faker.random.words(),
  totalCreditosVencidos: Faker.random.words(),
  peorCalificacion: Faker.random.words(),
  totalCreditosRefinanciados: Faker.random.words(),
  totalCreditosJudiciales: Faker.random.words()
}

export {
  dataLastPeriodDetailEmpty,
  dataLastPeriodDetailFaker
}
