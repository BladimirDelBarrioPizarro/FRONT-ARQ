import * as Faker from 'faker'

const dataAJTSDBGDPEmpty = {
  ajt: '',
  formajuridica: '',
  descripcionformajuridica: '',
  anteriorformajuridica: '',
  descripcionanteriorformajuridica: '',
  fechaconstitucion: '',
  fechaformajurididica: '',
  fechacambiocapitalnominal: '',
  fechadatosresumen: '',
  estadoactual: '',
  fechaestadoactual: '',
  capitalnominal: '',
  capitaldesembolsado: '',
  ventas: '',
  resultadoneto: '',
  fondospropios: '',
  capitalcirculante: '',
  activosfijos: '',
  existencias: '',
  fuentedatoseconomicos: '',
  capitalnominalanterior: '',
  numeroempleados: '',
  comentarios: ''
}

const dataAJTSDBGDPFaker = {
  ajt: Faker.random.words(),
  formajuridica: Faker.random.words(),
  descripcionformajuridica: Faker.random.words(),
  anteriorformajuridica: Faker.random.words(),
  descripcionanteriorformajuridica: Faker.random.words(),
  fechaconstitucion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaformajurididica: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechacambiocapitalnominal: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechadatosresumen: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  estadoactual: Faker.random.words(),
  fechaestadoactual: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  capitalnominal: Faker.random.words(),
  capitaldesembolsado: Faker.random.words(),
  ventas: Faker.random.words(),
  resultadoneto: Faker.random.words(),
  fondospropios: Faker.random.words(),
  capitalcirculante: Faker.random.words(),
  activosfijos: Faker.random.words(),
  existencias: Faker.random.words(),
  fuentedatoseconomicos: Faker.random.words(),
  capitalnominalanterior: Faker.random.words(),
  numeroempleados: Faker.random.words(),
  comentarios: Faker.random.words()
}

export {
  dataAJTSDBGDPEmpty,
  dataAJTSDBGDPFaker
}
