import * as Faker from 'faker'

const dataRejectChecksLegalEmpty = {
  cheque1: '',
  cheque2: '',
  cheque3: '',
  cheque4: '',
  cheque5: '',
  fecharech1: '',
  fecharech2: '',
  fecharech3: '',
  fecharech4: '',
  fecharech5: '',
  monto1: '',
  monto2: '',
  monto3: '',
  monto4: '',
  monto5: '',
  causal1: '',
  causal2: '',
  causal3: '',
  causal4: '',
  causal5: '',
  fechapago1: '',
  fechapago2: '',
  fechapago3: '',
  fechapago4: '',
  fechapago5: '',
  revision1: '',
  revision2: '',
  revision3: '',
  revision4: '',
  revision5: '',
  pagomulta1: '',
  pagomulta2: '',
  pagomulta3: '',
  pagomulta4: '',
  pagomulta5: ''
}

const dataRejectChecksLegalFaker = {
  cheque1: Faker.random.words(),
  cheque2: Faker.random.words(),
  cheque3: Faker.random.words(),
  cheque4: Faker.random.words(),
  cheque5: Faker.random.words(),
  fecharech1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecharech2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecharech3: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecharech4: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecharech5: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  monto1: Faker.random.words(),
  monto2: Faker.random.words(),
  monto3: Faker.random.words(),
  monto4: Faker.random.words(),
  monto5: Faker.random.words(),
  causal1: Faker.random.words(),
  causal2: Faker.random.words(),
  causal3: Faker.random.words(),
  causal4: Faker.random.words(),
  causal5: Faker.random.words(),
  fechapago1: Faker.random.words(),
  fechapago2: Faker.random.words(),
  fechapago3: Faker.random.words(),
  fechapago4: Faker.random.words(),
  fechapago5: Faker.random.words(),
  revision1: Faker.random.words(),
  revision2: Faker.random.words(),
  revision3: Faker.random.words(),
  revision4: Faker.random.words(),
  revision5: Faker.random.words(),
  pagomulta1: Faker.random.words(),
  pagomulta2: Faker.random.words(),
  pagomulta3: Faker.random.words(),
  pagomulta4: Faker.random.words(),
  pagomulta5: Faker.random.words()
}

export {
  dataRejectChecksLegalEmpty,
  dataRejectChecksLegalFaker
}
