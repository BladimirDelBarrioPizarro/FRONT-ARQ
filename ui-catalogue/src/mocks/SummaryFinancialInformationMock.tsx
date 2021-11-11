import * as Faker from 'faker'

const dataSummaryFinancialInformationEmpty = {
  nombre: '',
  valor: '',
  ratioapalancamiento: '',
  nivelapalancamiento: '',
  ratioacidez: '',
  pctapalancamiento: '',
  desmontante: '',
  montante: '',
  tipofecpropiedades: '',
  fechapropiedades: ''
}

const dataSummaryFinancialInformationFaker = {
  nombre: Faker.random.words(),
  valor: Faker.random.words(),
  ratioapalancamiento: Faker.random.words(),
  nivelapalancamiento: Faker.random.words(),
  ratioacidez: Faker.random.words(),
  pctapalancamiento: Faker.random.words(),
  desmontante: Faker.random.words(),
  montante: Faker.random.words(),
  tipofecpropiedades: Faker.random.words(),
  fechapropiedades: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString()
}

export {
  dataSummaryFinancialInformationEmpty,
  dataSummaryFinancialInformationFaker
}
