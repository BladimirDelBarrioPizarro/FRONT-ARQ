import * as Faker from 'faker'

const dataOrganizationTypeEmpty = {
  statusActual: '',
  fechaStatusActual: '',
  tipoOrganizacion: '',
  fechaTomaControl: '',
  anoConstitucion: '',
  mes: '',
  tipoempresa: '',
  tipofirma: '',
  statusActual2: '',
  fechaStatusActual2: ''
}

const dataOrganizationTypeFaker = {
  statusActual: Faker.random.words(),
  fechaStatusActual: Faker.random.words(),
  tipoOrganizacion: Faker.random.words(),
  fechaTomaControl: Faker.random.words(),
  anoConstitucion: Faker.random.words(),
  mes: Faker.random.words(),
  tipoempresa: Faker.random.words(),
  tipofirma: Faker.random.words(),
  statusActual2: Faker.random.words(),
  fechaStatusActual2: Faker.random.words()
}

export {
  dataOrganizationTypeEmpty,
  dataOrganizationTypeFaker
}
