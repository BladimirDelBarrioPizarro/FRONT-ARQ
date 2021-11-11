
import * as Faker from 'faker'

const dataRatingsDBGDPEmpty = {
  rating: '',
  fechacambiorating: '',
  importerecomendado: '',
  importemediosolicitado: '',
  ratinganterior: '',
  conceptocomercial: '',
  evaluacionporcentaje: '',
  limitecredito: '',
  riesgotesoreria: '',
  codigoRTE: '',
  valorRTE: ''

}

const dataRatingsDBGDPFaker = {
  rating: Faker.random.words(),
  fechacambiorating: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  importerecomendado: Faker.random.words(),
  importemediosolicitado: Faker.random.words(),
  ratinganterior: Faker.random.words(),
  conceptocomercial: Faker.random.words(),
  evaluacionporcentaje: Faker.random.words(),
  limitecredito: Faker.random.words(),
  riesgotesoreria: Faker.random.words(),
  codigoRTE: Faker.random.words(),
  valorRTE: Faker.random.words()
}

export {
  dataRatingsDBGDPEmpty,
  dataRatingsDBGDPFaker
}
