import * as Faker from 'faker'

const dataAddressFranciaEmpty = {
  localidad: '',
  codigopostal: '',
  provincia: '',
  fechainicio: '',
  fechacambiodomicilio: ''
}

const dataAddressFranciaFaker = {
  localidad: Faker.random.words(),
  codigopostal: Faker.random.words(),
  provincia: Faker.random.words(),
  fechainicio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacambiodomicilio: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataAddressFranciaEmpty,
  dataAddressFranciaFaker
}
