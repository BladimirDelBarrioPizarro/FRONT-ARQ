import * as Faker from 'faker'

const tableBusinessDataRow = (): any => ({
  codDeudor: Faker.random.number(999999999),
  nombreDeudor: Faker.address.country()
})

const tableBusinessDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableBusinessDataRow())
)

export {
  tableBusinessDataRow,
  tableBusinessDataRows
}
