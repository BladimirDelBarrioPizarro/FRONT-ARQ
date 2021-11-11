const Faker = require('faker')

const tableCompanyDataRow = () => ({
  country: Faker.address.country(),
  code: Faker.random.number(),
  name: Faker.address.country()
})

const tableCompanyDataRows = (elements) => (
  [...new Array(elements)].map(() => tableCompanyDataRow())
)

module.exports = (request, response) => {
  response.send({
    data: tableCompanyDataRows(+request.query.itemsPerPage),
    totalRows: 100, //  hardcodeamos este dato en el mock
    rowsPerPage: +request.query.itemsPerPage
  })
}
