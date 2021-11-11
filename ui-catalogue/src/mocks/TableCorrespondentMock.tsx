import * as Faker from 'faker'

const tableCorrespondentsDataRow = (): any => ({
  codCorresponsal: Faker.random.number(),
  nombreCorresponsal: Faker.company.companyName()
})

const tableCorrespondentsDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableCorrespondentsDataRow())
)

export {
  tableCorrespondentsDataRow,
  tableCorrespondentsDataRows
}
