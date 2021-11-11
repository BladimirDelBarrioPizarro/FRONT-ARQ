import * as Faker from 'faker'

const dataLegalProceduresITEmpty = {
  fechaactualizacion: ''
}

const dataLegalProceduresITFormFaker = {
  fechaactualizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataLegalProceduresITEmpty,
  dataLegalProceduresITFormFaker
}
