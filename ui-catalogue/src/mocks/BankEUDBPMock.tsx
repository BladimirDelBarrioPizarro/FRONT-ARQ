import * as Faker from 'faker'

const dataBankEUDBPEmpty = {
  nombre: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  fechaapertura: '',
  credito: '',
  saldo: '',
  fechasaldo: '',
  limitedescubrimiento: '',
  creditogarantizado: ''
}

const dataBankEUDBPFaker = {
  nombre: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  fechaapertura: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  credito: Faker.random.words(),
  saldo: Faker.random.words(),
  fechasaldo: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  limitedescubrimiento: Faker.random.words(),
  creditogarantizado: Faker.random.words()
}

export {
  dataBankEUDBPEmpty,
  dataBankEUDBPFaker
}
