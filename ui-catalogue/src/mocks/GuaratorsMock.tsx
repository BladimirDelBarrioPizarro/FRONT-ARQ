import * as Faker from 'faker'

const dataGuaratorsEmpty = {
  tipodocumento: '',
  ndocumento: '',
  nombreavalado: '',
  entidad: '',
  calificacion: '',
  saldo: ''
}

const dataGuaratorsFaker = {
  tipodocumento: Faker.random.words(),
  ndocumento: Faker.random.words(),
  nombreavalado: Faker.random.words(),
  entidad: Faker.random.words(),
  calificacion: Faker.random.words(),
  saldo: Faker.random.words()
}

export {
  dataGuaratorsEmpty,
  dataGuaratorsFaker
}
