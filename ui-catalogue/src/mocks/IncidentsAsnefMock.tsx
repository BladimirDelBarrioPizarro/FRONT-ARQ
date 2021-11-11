import * as Faker from 'faker'

const dataIncidentsAsnefEmpty = {
  reclamacion: '',
  importereclamaciones: '',
  incidenciasjudiciales: '',
  importeincidencias: ''
}

const dataIncidentsAsnefFaker = {
  reclamacion: Faker.random.words(),
  importereclamaciones: Faker.random.words(),
  incidenciasjudiciales: Faker.random.words(),
  importeincidencias: Faker.random.words()
}

export {
  dataIncidentsAsnefEmpty,
  dataIncidentsAsnefFaker
}
