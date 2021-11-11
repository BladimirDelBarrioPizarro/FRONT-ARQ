import * as Faker from 'faker'

const dataScoreEmpty = {
  score: ''
}

const dataScoreFaker = {
  score: Faker.random.words()
}

export {
  dataScoreEmpty,
  dataScoreFaker
}
