import * as Faker from 'faker'

const dataPaymentFormEmpty = {
  transacciones: '',
  proveedores: '',
  paydex: ''
}

const dataPaymentFormFaker = {
  transacciones: Faker.random.words(),
  proveedores: Faker.random.words(),
  paydex: Faker.random.words()
}

export {
  dataPaymentFormEmpty,
  dataPaymentFormFaker
}
