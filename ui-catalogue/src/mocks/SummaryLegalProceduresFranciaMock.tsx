import * as Faker from 'faker'

const dataSummaryLegalProceduresFranciaEmpty = {
  fechaactualizacion: '',
  periodoanalizado: '',
  tipodeacccion: '',
  clasedeaccion: '',
  numeroprocedimientos1: '',
  importetotal1: '',
  importetotal2: '',
  procedimientolegal: '',
  situacionactual: '',
  numeroprocedimentos2: '',
  importetotal3: '',
  importetotal4: ''
}

const dataSummaryLegalProceduresFranciaFaker = {
  fechaactualizacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  periodoanalizado: Faker.random.words(),
  tipodeacccion: Faker.random.words(),
  clasedeaccion: Faker.random.words(),
  numeroprocedimientos1: Faker.random.words(),
  importetotal1: Faker.random.words(),
  importetotal2: Faker.random.words(),
  procedimientolegal: Faker.random.words(),
  situacionactual: Faker.random.words(),
  numeroprocedimentos2: Faker.random.words(),
  importetotal3: Faker.random.words(),
  importetotal4: Faker.random.words()
}

export {
  dataSummaryLegalProceduresFranciaEmpty,
  dataSummaryLegalProceduresFranciaFaker
}
