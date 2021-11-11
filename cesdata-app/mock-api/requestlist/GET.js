const Faker = require('faker')

const tableRequestListDataRow = () => ({
    petitionNumber: Faker.random.number(),
    productCESCE: Faker.lorem.words(),
    companyCode: Faker.company.companyName(),
    cif: Faker.company.companyName(),
    situation: Faker.company.companyName(),
    highDate: Faker.company.companyName(),
    claimed: Faker.company.companyName(),
    urgency: Faker.company.companyName()
})

const tableRequestListDataRows = (elements) => (
  [...new Array(elements)].map(() => tableRequestListDataRow())
)

module.exports = (request, response) => {
  response.send({
    data: tableRequestListDataRows(+request.query.itemsPerPage),
    totalRows: 100, //  hardcodeamos este dato en el mock
    rowsPerPage: +request.query.itemsPerPage
  })
}
