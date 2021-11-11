
import * as Faker from 'faker'

const dataAveragePaymentEmpty = {
  periodomediopago: '',
  periodomediocobro: '',
  deudores: ''
}

const dataAveragePaymentFaker = {
  periodomediopago: Faker.random.words(),
  periodomediocobro: Faker.random.words(),
  deudores: Faker.random.words()
}

export {
  dataAveragePaymentEmpty,
  dataAveragePaymentFaker
}
