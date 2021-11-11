import * as Faker from 'faker'

const dataPrimaryResidenceNoDBEmpty = {
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  comentarios: '',
  bolsa: '',
  numeropeticion: '',
  codnomcorresponsal: '',
  codproducto: '',
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

const dataPrimaryResidenceNoDBFaker = {
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  comentarios: Faker.random.words(),
  bolsa: Faker.random.words(),
  numeropeticion: Faker.random.words(),
  codnomcorresponsal: Faker.random.words(),
  codproducto: Faker.random.words(),
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
  dataPrimaryResidenceNoDBEmpty,
  dataPrimaryResidenceNoDBFaker
}
