import * as Faker from 'faker'

const selectCorrespondentsDataRow = (): any => ({
  value: Faker.random.number(),
  label: Faker.company.companyName()
})

const selectCorrespondentsDataRows = (elements): any => (
  [...new Array(elements)].map(() => selectCorrespondentsDataRow())
)

export {
  selectCorrespondentsDataRow,
  selectCorrespondentsDataRows
}
