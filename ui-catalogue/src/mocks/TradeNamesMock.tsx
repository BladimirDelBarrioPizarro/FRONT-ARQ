import * as Faker from 'faker'

const dataTradeNamesEmpty = {
  nombreComercial: ''
}

const dataTradeNamesFaker = {
  nombreComercial: Faker.random.words()
}

export {
  dataTradeNamesEmpty,
  dataTradeNamesFaker
}
