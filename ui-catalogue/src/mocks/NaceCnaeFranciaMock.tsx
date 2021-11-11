import * as Faker from 'faker'

const dataNaceCnaeFranciaEmpty = {
  tipocodigo: '',
  codigoactividad: ''
}

const dataNaceCnaeFranciaFaker = {
  tipocodigo: Faker.random.words(),
  codigoactividad: Faker.random.words()
}

export {
  dataNaceCnaeFranciaEmpty,
  dataNaceCnaeFranciaFaker
}
