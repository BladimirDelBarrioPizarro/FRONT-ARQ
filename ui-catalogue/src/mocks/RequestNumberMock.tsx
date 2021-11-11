import * as Faker from 'faker'

const dataRequestNumberEmpty = {
  corresponsal: '',
  nombreCorresponsal: '',
  sucursal: '',
  empresa: '',
  cif: '',
  nombreEmpresa: '',
  codigopostal: '',
  direccion: '',
  npeticion: '',
  plazapago: '',
  fechapeticion: '',
  modelo: '',
  producto: '',
  importeoperacion: '',
  divoperacion: '',
  importeoperacioncre: '',
  divoperacioncre: ''
}

const dataRequestNumberFaker = {
  corresponsal: Faker.company.companyName(),
  nombreCorresponsal: Faker.company.companyName(),
  sucursal: Faker.random.words(),
  empresa: Faker.random.words(),
  cif: Faker.random.words(),
  nombreEmpresa: Faker.random.words(),
  codigopostal: Faker.random.words(),
  direccion: Faker.address.streetAddress(),
  npeticion: Faker.random.number(99),
  plazapago: Faker.random.words(),
  fechapeticion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  modelo: Faker.random.words(),
  producto: Faker.random.words(),
  importeoperacion: Faker.random.number(99),
  divoperacion: Faker.random.number(99),
  importeoperacioncre: Faker.random.number(99),
  divoperacioncre: Faker.random.number(99)
}

export {
  dataRequestNumberEmpty,
  dataRequestNumberFaker
}
