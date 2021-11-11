import * as Faker from 'faker'

const bankDataEmpty = {
  denominacion: '',
  codigoIdentificador: ''
}

const bankDataFaker = {
  denominacion: Faker.random.words(),
  codigoIdentificador: Faker.random.words()
}

export {
  bankDataEmpty,
  bankDataFaker
}
