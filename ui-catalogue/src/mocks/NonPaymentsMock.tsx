import * as Faker from 'faker'

const dataNonPaymentsEmpty = {
  fechaefecto: '',
  importepagado: '',
  claveprotesta: '',
  librador: '',
  claveestado: '',
  claveaceptado: '',
  tipodocumento: '',
  entidadinformante: '',
  importepagadoactual: ''
}

const dataNonPaymentsFaker = {
  fechaefecto: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  importepagado: Faker.random.words(),
  claveprotesta: Faker.random.words(),
  librador: Faker.random.words(),
  claveestado: Faker.random.words(),
  claveaceptado: Faker.random.words(),
  tipodocumento: Faker.random.words(),
  entidadinformante: Faker.random.words(),
  importepagadoactual: Faker.random.words()
}

export {
  dataNonPaymentsEmpty,
  dataNonPaymentsFaker
}
