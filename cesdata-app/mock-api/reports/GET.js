const Faker = require('faker')

const tableReportsDataRow = () => ({
  code: Faker.random.number(),
  denomination: Faker.company.companyName(),
  cif: Faker.company.companyName(),
  agency: Faker.company.companyName(),
  date: Faker.company.companyName(),
  type: Faker.lorem.words()
})

const tableReportsDataRows = (elements) => (
  [...new Array(elements)].map(() => tableReportsDataRow())
)

module.exports = (request, response) => {
  response.send({
    data: tableReportsDataRows(+request.query.itemsPerPage),
    totalRows: 100, //  hardcodeamos este dato en el mock
    rowsPerPage: +request.query.itemsPerPage
  })
}
