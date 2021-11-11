import * as Faker from 'faker'

const dataDatosInformaEmpty = {
  numeropeticion: '',
  codigoproducto: '',
  codnomempresa: '',
  tipocorresponsal: '',
  numerodocumento: '',
  tipodocumento: '',
  numeroinforme: '',
  numeromovimiento: '',
  origen: '',
  gravedadajt: '',
  tipofichero: '',
  nombrefichero: ''
}

const dataDatosInformaFaker = {
  numeropeticion: Faker.random.words(),
  codigoproducto: Faker.random.words(),
  codnomempresa: Faker.random.words(),
  tipocorresponsal: Faker.random.words(),
  numerodocumento: Faker.random.words(),
  tipodocumento: Faker.random.words(),
  numeroinforme: Faker.random.words(),
  numeromovimiento: Faker.random.words(),
  origen: Faker.random.words(),
  gravedadajt: Faker.random.words(),
  tipofichero: Faker.random.words(),
  nombrefichero: Faker.random.words()
}

export {
  dataDatosInformaEmpty,
  dataDatosInformaFaker
}
