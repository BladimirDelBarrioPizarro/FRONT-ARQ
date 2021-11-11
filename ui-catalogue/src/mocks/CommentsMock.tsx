import * as Faker from 'faker'

const dataCommentsEmpty = {
  comentarios: '',
  titularidad: '',
  tipodelocales: '',
  superficie1: '',
  superficie2: ''
}

const dataCommentsFaker = {
  comentarios: Faker.random.words(),
  titularidad: Faker.random.words(),
  tipodelocales: Faker.random.words(),
  superficie1: Faker.random.words(),
  superficie2: Faker.random.words()
}

export {
  dataCommentsEmpty,
  dataCommentsFaker
}
