import * as Faker from 'faker'

const dataExternalFinancingPOAEmpty = [
  {
    fechamodificacion: '',
    fechacancelacion: '',
    tipofinanciacion: '',
    proveedor: '',
    importe: '',
    bienesgarantia: '',
    comentarios: ''
  },
  {
    fechamodificacion: '',
    fechacancelacion: '',
    tipofinanciacion: '',
    proveedor: '',
    importe: '',
    bienesgarantia: '',
    comentarios: ''
  },
  {
    fechamodificacion: '',
    fechacancelacion: '',
    tipofinanciacion: '',
    proveedor: '',
    importe: '',
    bienesgarantia: '',
    comentarios: ''
  },
  {
    fechamodificacion: '',
    fechacancelacion: '',
    tipofinanciacion: '',
    proveedor: '',
    importe: '',
    bienesgarantia: '',
    comentarios: ''
  }
]

const dataExternalFinancingPOAFaker = [
  {
    fechamodificacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    fechacancelacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    tipofinanciacion: Faker.random.words(),
    proveedor: Faker.random.words(),
    importe: Faker.random.words(),
    bienesgarantia: Faker.random.words(),
    comentarios: Faker.random.words()
  },
  {
    fechamodificacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    fechacancelacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    tipofinanciacion: Faker.random.words(),
    proveedor: Faker.random.words(),
    importe: Faker.random.words(),
    bienesgarantia: Faker.random.words(),
    comentarios: Faker.random.words()
  }
]

export {
  dataExternalFinancingPOAEmpty,
  dataExternalFinancingPOAFaker
}
