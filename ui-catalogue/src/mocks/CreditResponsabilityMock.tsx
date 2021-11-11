import * as Faker from 'faker'

const creditResponsabilityDataEmpty = {
  diaCentralizacion: '',
  entidades: '',
  incumplimiento: '',
  productosFinancieros: ''
}

const creditResponsabilityDataFaker = {
  diaCentralizacion: Faker.random.words(),
  entidades: Faker.random.words(),
  incumplimiento: Faker.random.words(),
  productosFinancieros: Faker.random.words()
}

export {
  creditResponsabilityDataEmpty,
  creditResponsabilityDataFaker
}
