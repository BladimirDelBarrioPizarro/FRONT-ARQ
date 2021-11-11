import * as Faker from 'faker'

const masiveTableReportsDataRow = (): any => ({
  fecha: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(),
  tipoDocumento: Faker.lorem.words(),
  corresponsal: Faker.random.words(5),
  codProducto: Faker.random.words(1)
})

const masiveTableReportsDataRows = (elements): any => {
  return [...new Array(elements)].map(() => masiveTableReportsDataRow())
}

export {
  masiveTableReportsDataRow,
  masiveTableReportsDataRows
}
