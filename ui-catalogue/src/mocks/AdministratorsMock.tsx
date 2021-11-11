import * as Faker from 'faker'

const dataAdministratorEmpty = {
  input1: '',
  input2: '',
  input3: '',
  form: [
    {
      relaciones1: '',
      relaciones2: '',
      asociacion: '',
      numeroDun: '',
      estatus1: '',
      estatus2: '',
      administrador: '',
      fecha: ''
    }
  ]
}

const dataAdministratorFaker = {
  input1: Faker.random.words(),
  input2: Faker.random.words(),
  input3: Faker.random.words(),
  form: [
    {
      relaciones1: Faker.random.words(),
      relaciones2: Faker.random.words(),
      asociacion: Faker.random.words(),
      numeroDun: Faker.random.words(),
      estatus1: Faker.random.words(),
      estatus2: Faker.random.words(),
      administrador: Faker.random.words(),
      fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
    },
    {
      relaciones1: Faker.random.words(),
      relaciones2: Faker.random.words(),
      asociacion: Faker.random.words(),
      numeroDun: Faker.random.words(),
      estatus1: Faker.random.words(),
      estatus2: Faker.random.words(),
      administrador: Faker.random.words(),
      fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
    },
    {
      relaciones1: Faker.random.words(),
      relaciones2: Faker.random.words(),
      asociacion: Faker.random.words(),
      numeroDun: Faker.random.words(),
      estatus1: Faker.random.words(),
      estatus2: Faker.random.words(),
      administrador: Faker.random.words(),
      fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
    },
    {
      relaciones1: Faker.random.words(),
      relaciones2: Faker.random.words(),
      asociacion: Faker.random.words(),
      numeroDun: Faker.random.words(),
      estatus1: Faker.random.words(),
      estatus2: Faker.random.words(),
      administrador: Faker.random.words(),
      fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
    }
  ]
}

export {
  dataAdministratorEmpty,
  dataAdministratorFaker
}
