import * as Faker from 'faker'

const tableExperianReportDataRow = (): any => ({
  code: Faker.random.number(),
  denomination: Faker.lorem.words(),
  cif: Faker.company.companyName(),
  agency: Faker.company.companyName(),
  date: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(),
  type: Faker.company.companyName()
})

const tableExperianReportDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableExperianReportDataRow())
)

export {
  tableExperianReportDataRow,
  tableExperianReportDataRows
}
