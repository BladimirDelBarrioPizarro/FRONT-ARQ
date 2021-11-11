import * as Faker from 'faker'

const tableReportsRefDataRow = (): any => ({
  agenciaInformacion: Faker.company.companyName(),
  codCreica: Faker.random.number(),
  codInforme: Faker.random.number(),
  fecha: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(),
  nif: Faker.company.companyName()
})

const tableReportsRefDataRows = (elements): any => {
  return [...new Array(elements)].map(() => tableReportsRefDataRow())
}

export {
  tableReportsRefDataRow,
  tableReportsRefDataRows
}
