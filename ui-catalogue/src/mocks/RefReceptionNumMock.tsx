import * as Faker from 'faker'

const dataCorresponsalDataFaker = {
  corresponsal: Faker.random.words(),
  nombre: Faker.random.words(),
  sucursal: Faker.random.words()
}

const dataCompanyDataFaker = {
  empresa: Faker.random.words(),
  cif: Faker.random.words(),
  nombre: Faker.random.words(),
  codigopostal: Faker.random.words(),
  direccion: Faker.random.words()
}

const dataApplicationDetailsFaker = {
  npeticion: Faker.random.words(),
  plazapago: Faker.random.words(),
  fpeticion: Faker.random.words(),
  modelo: Faker.random.words(),
  productoobtener: Faker.random.words(),
  importeoperacion: Faker.random.words(),
  divoperacion: Faker.random.words(),
  importeoperacioncre: Faker.random.words(),
  divoperacioncre: Faker.random.words()
}

const dataRefReceptionNumFaker = {
  correspondentData: dataCorresponsalDataFaker,
  companyData: dataCompanyDataFaker,
  applicationDetails: dataApplicationDetailsFaker
}
export {
  dataRefReceptionNumFaker
}
