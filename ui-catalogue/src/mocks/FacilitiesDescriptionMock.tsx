import * as Faker from 'faker'

const dataFacilitiesDescriptionEmpty = {
  titularidad: ''
}

const dataFacilitiesDescriptionFaker = {
  titularidad: Faker.random.words()
}

export {
  dataFacilitiesDescriptionEmpty,
  dataFacilitiesDescriptionFaker
}
