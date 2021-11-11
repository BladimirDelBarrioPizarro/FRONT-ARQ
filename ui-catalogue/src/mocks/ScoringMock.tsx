import * as Faker from 'faker'

const dataScoringEmpty = {
  estadopeticion: '',
  ventas: '',
  resultado: '',
  fondospropios: '',
  evolucionventas: '',
  evoluciontesoreria: '',
  fechaconstitucion: '',
  numimpagos18: '',
  capitalutil: '',
  puntosligados: '',
  codigovidaempresa: '',
  anoconstitucionestimado: '',
  ventasestimadas: '',
  fechabalance: '',
  importeefectospagados: ''
}

const dataScoringFaker = {
  estadopeticion: Faker.random.words(),
  ventas: Faker.random.words(),
  resultado: Faker.random.words(),
  fondospropios: Faker.random.words(),
  evolucionventas: Faker.random.words(),
  evoluciontesoreria: Faker.random.words(),
  fechaconstitucion: Faker.random.words(),
  numimpagos18: Faker.random.words(),
  capitalutil: Faker.random.words(),
  puntosligados: Faker.random.words(),
  codigovidaempresa: Faker.random.words(),
  anoconstitucionestimado: Faker.random.words(),
  ventasestimadas: Faker.random.words(),
  fechabalance: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  importeefectospagados: Faker.random.words()
}

export {
  dataScoringEmpty,
  dataScoringFaker
}
