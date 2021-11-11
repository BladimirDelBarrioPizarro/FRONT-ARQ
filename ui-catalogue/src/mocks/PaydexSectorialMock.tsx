import * as Faker from 'faker'

const dataPaydexSectorialEmpty = {
  cuatrilsup: '',
  mediana: '',
  cuatrilinf: ''
}

const dataPaydexSectorialFaker = {
  cuatrilsup: Faker.random.words(),
  mediana: Faker.random.words(),
  cuatrilinf: Faker.random.words()
}

export {
  dataPaydexSectorialEmpty,
  dataPaydexSectorialFaker
}
