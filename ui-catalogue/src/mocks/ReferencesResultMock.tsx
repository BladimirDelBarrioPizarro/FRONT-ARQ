import * as Faker from 'faker'
import { IDateTimeFormatOptions } from './types'

const dateProperties: IDateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}

const detailRequestDataEmpty = {
  nombreSujeto: '',
  nombreCorresponsal: '',
  nombreComercial: '',
  codFiscal: '',
  codSector: '',
  codProducto: '',
  motivoPeticion: '',
  notasEnvio: '',
  domicilio: '',
  numeroTelefono: '',
  numeroFax: '',
  fechaNotaAnulacion: '',
  fechaEnvioPeticion: '',
  fechaRecepcionPrevista: '',
  urgenciaPeticion: '',
  observaciones: '',
  situacionPeticion: '',
  fechaCancelacion: '',
  fechaRecepcionReal: '',
  fechaReclamacion1: '',
  fechaReclamacion2: ''
}

const detailRequestDataFaker = {
  nombreSujeto: Faker.company.companyName(),
  nombreCorresponsal: Faker.company.companyName(),
  nombreComercial: Faker.random.words(),
  codFiscal: Faker.random.words().substring(0, 1).toUpperCase() + Faker.random.number(99999999),
  codSector: Faker.random.number(9999),
  codProducto: Faker.random.number(999),
  motivoPeticion: Faker.random.number(99),
  notasEnvio: Faker.random.words(),
  domicilio: Faker.address.streetAddress(),
  numeroTelefono: Faker.phone.phoneNumber(),
  numeroFax: Faker.phone.phoneNumber(),
  fechaNotaAnulacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  fechaEnvioPeticion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  fechaRecepcionPrevista: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  urgenciaPeticion: Faker.random.words(),
  observaciones: Faker.random.words(50),
  situacionPeticion: Faker.random.words(),
  fechaCancelacion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  fechaRecepcionReal: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  fechaReclamacion1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  fechaReclamacion2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString()
}

export {
  detailRequestDataEmpty,
  detailRequestDataFaker
}
