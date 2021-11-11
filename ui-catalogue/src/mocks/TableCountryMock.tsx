import * as Faker from 'faker'

const tableCountryDataRow = (): any => ({
  value: Faker.random.number(),
  label: Faker.address.country()
})

const tableCountryDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableCountryDataRow())
)

export {
  tableCountryDataRow,
  tableCountryDataRows
}
