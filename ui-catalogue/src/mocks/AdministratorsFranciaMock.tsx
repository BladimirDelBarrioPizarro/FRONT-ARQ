import * as Faker from 'faker'

const dataAdministratorsFranciaEmpty = {
  input1: '',
  fechadenacimiento: '',
  porcentajedeparticipacion: '',
  fechatomacargo: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
  input10: '',
  input11: '',
  input12: '',
  input13: '',
  input14: '',
  input15: '',
  input16: '',
  tipoasociacion: '',
  numeroDun: '',
  estatusactual: '',
  input17: '',
  administradordesde: '',
  fechafinalizacion: ''
}

const dataAdministratorsFranciaFaker = {
  input1: Faker.random.words(),
  fechadenacimiento: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  porcentajedeparticipacion: Faker.random.words(),
  fechatomacargo: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  input2: Faker.random.words(),
  input3: Faker.random.words(),
  input4: Faker.random.words(),
  input5: Faker.random.words(),
  input6: Faker.random.words(),
  input7: Faker.random.words(),
  input8: Faker.random.words(),
  input9: Faker.random.words(),
  input10: Faker.random.words(),
  input11: Faker.random.words(),
  input12: Faker.random.words(),
  input13: Faker.random.words(),
  input14: Faker.random.words(),
  input15: Faker.random.words(),
  input16: Faker.random.words(),
  tipoasociacion: Faker.random.words(),
  numeroDun: Faker.random.words(),
  estatusactual: Faker.random.words(),
  input17: Faker.random.words(),
  administradordesde: Faker.random.words(),
  fechafinalizacion: Faker.random.words()
}

export {
  dataAdministratorsFranciaEmpty,
  dataAdministratorsFranciaFaker
}
