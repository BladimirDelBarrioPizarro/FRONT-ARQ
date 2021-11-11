import * as Faker from 'faker'

const entityCommunicationDataEmpty = {
  deuda: '',
  deudaDeudor: '',
  incumplimiento: '',
  incumplimientoDeudor: '',
  potencial: '',
  potencialDeudor: ''
}

const entityCommunicationDataFaker = {
  deuda: Faker.random.words(),
  deudaDeudor: Faker.random.words(),
  incumplimiento: Faker.random.words(),
  incumplimientoDeudor: Faker.random.words(),
  potencial: Faker.random.words(),
  potencialDeudor: Faker.random.words()
}

export {
  entityCommunicationDataEmpty,
  entityCommunicationDataFaker
}
