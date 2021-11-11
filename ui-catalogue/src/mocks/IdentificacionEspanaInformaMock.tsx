import * as Faker from 'faker'

const dataIdentificacionEspanaInformaEmpty = {
  denominacion: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  tipoidenfiscal: '',
  codidenfiscal: '',
  fechultbalance: '',
  comentariosbalances: '',
  incidenciasdep: '',
  comentariogen: '',
  comentarios: ''
}

const dataIdentificacionEspanaInformaFaker = {
  denominacion: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  tipoidenfiscal: Faker.random.words(),
  codidenfiscal: Faker.random.words(),
  fechultbalance: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  comentariosbalances: Faker.random.words(),
  incidenciasdep: Faker.random.words(),
  comentariogen: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataIdentificacionEspanaInformaEmpty,
  dataIdentificacionEspanaInformaFaker
}
