import * as Faker from 'faker'

const tableCompanyDataRow = (): any => ({
  codDeudor: Faker.random.number(999999999),
  nombreDeudor: Faker.address.country()
})

const tableCompanyDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableCompanyDataRow())
)

export {
  tableCompanyDataRow,
  tableCompanyDataRows
}
