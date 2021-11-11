const Faker = require('faker')

const tableCorrespondentsDataRow = () => ({
  code: Faker.random.number(),
  description: Faker.company.companyName()
})

const tableCorrespondentsDataRows = (elements) => (
  [...new Array(elements)].map(() => tableCorrespondentsDataRow())
)

module.exports = (request, response) => {
  console.log(tableCorrespondentsDataRows(+request.query.itemsPerPage))
  response.send({
    data: tableCorrespondentsDataRows(+request.query.itemsPerPage),
    totalRows: 100, //  hardcodeamos este dato en el mock
    rowsPerPage: +request.query.itemsPerPage
  })
}
