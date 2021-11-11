import * as Faker from 'faker'

const tableUtilitiesReportRefDataRow = (): any => ({
  codProducto: Faker.random.number(),
  fecPeticion: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(), // fecPeticion
  numPeticion: Faker.random.number(), // numPeticion
  codCorresponsal: Faker.random.number(), // codPais
  nomEmpresa: Faker.company.companyName(), //
  situacion: Faker.random.words() // situacion
  // valSigPag: Faker.random.number(30)
})

const tableUtilitiesReportRefDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableUtilitiesReportRefDataRow())
)

export {
  tableUtilitiesReportRefDataRow,
  tableUtilitiesReportRefDataRows
}
