import * as Faker from 'faker'

const tableReportsDataRow = (): any => ({
  id: Faker.random.number(),
  codDeudor: Faker.random.number(999999999),
  denominacionSocial: Faker.company.companyName(),
  codFiscal: Faker.company.companyName(),
  agenciaInformacion: Faker.company.companyName(),
  fecha: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(),
  tipoFichero: Faker.lorem.words()
})

const tableReportsDataRows = (elements): any => {
  return [...new Array(elements)].map(() => tableReportsDataRow())
}

export {
  tableReportsDataRow,
  tableReportsDataRows
}
