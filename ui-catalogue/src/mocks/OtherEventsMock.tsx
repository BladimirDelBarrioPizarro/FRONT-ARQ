import * as Faker from 'faker'

const dataOtherEventsEmpty = [
  {
    evento: '',
    fecha: '',
    efecto: '',
    importe: '',
    localizacion: ''
  },
  {
    evento: '',
    fecha: '',
    efecto: '',
    importe: '',
    localizacion: ''
  },
  {
    evento: '',
    fecha: '',
    efecto: '',
    importe: '',
    localizacion: ''
  },
  {
    evento: '',
    fecha: '',
    efecto: '',
    importe: '',
    localizacion: ''
  }
]

const dataOtherEventsFaker = [
  {
    evento: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    efecto: Faker.random.words(),
    importe: Faker.random.words(),
    localizacion: Faker.random.words()
  },
  {
    evento: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    efecto: Faker.random.words(),
    importe: Faker.random.words(),
    localizacion: Faker.random.words()
  },
  {
    evento: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    efecto: Faker.random.words(),
    importe: Faker.random.words(),
    localizacion: Faker.random.words()
  },
  {
    evento: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    efecto: Faker.random.words(),
    importe: Faker.random.words(),
    localizacion: Faker.random.words()
  }
]

const dataOtherEventsOneFaker =
  {
    evento: Faker.random.words(),
    fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
    efecto: Faker.random.words(),
    importe: Faker.random.words(),
    localizacion: Faker.random.words()
  }

const dataOtherEventsOneEmpty =
  {
    evento: '',
    fecha: '',
    efecto: '',
    importe: '',
    localizacion: ''
  }

export {
  dataOtherEventsEmpty,
  dataOtherEventsFaker,
  dataOtherEventsOneFaker,
  dataOtherEventsOneEmpty
}
