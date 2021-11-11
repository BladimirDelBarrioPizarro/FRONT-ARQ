import * as Faker from 'faker'

const tableRequestListDataRow = (): any => ({
  numPeticion: Faker.random.number(),
  productoCesce: Faker.company.companyName(),
  codDeudor: Faker.company.companyName(),
  codFiscal: Faker.company.companyName(),
  situacion: Faker.random.arrayElement(['EMITIDA', 'CANCELADA', 'CONFIRMADA']),
  fechaAlta: new Date(Faker.date.between('2015-01-01', '2015-01-05')).toLocaleDateString('es-ES').toString(),
  reclamada: Faker.random.arrayElement(['NO', 'SI']),
  urgencia: Faker.company.companyName()
})

const tableRequestListDataRows = (elements): any => (
  [...new Array(elements)].map(() => tableRequestListDataRow())
)

export {
  tableRequestListDataRow,
  tableRequestListDataRows
}
