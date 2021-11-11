import * as Faker from 'faker'
import { IDateTimeFormatOptions } from './types'

const dateProperties: IDateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}

const detailPetitionDataFaker = {
  nombreSujeto: Faker.company.companyName(),
  codFiscal: Faker.random.words().substring(0, 1).toUpperCase() + Faker.random.number(99999999),
  domicilio: Faker.address.streetAddress(),
  provincia: Faker.address.streetAddress(),
  codPostal: Faker.random.number(99999),
  numeroTelefono: Faker.phone.phoneNumber(),
  numeroFax: Faker.phone.phoneNumber(),
  observaciones: Faker.random.words(20),
  juridica: Faker.random.words(),
  fechaConstitucion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  sucursales: Faker.random.words(20),
  empleados: Faker.random.words(),
  capitalSocial: Faker.random.words(),
  capitalDesembolsado: Faker.random.words(),
  CNAE: Faker.random.words(),
  tipoProducto: Faker.random.words(),
  ventasEstimadas: Faker.random.words(),
  bancos: Faker.random.words(20),
  concClientes: Faker.random.words(),
  princClientes: Faker.random.words(),
  princProveedores: Faker.random.words(),
  competidores: Faker.random.words(),
  exportacion: Faker.random.words(),
  paises: Faker.random.words(5),
  confidencial: 'true',
  alerta: 'false',
  consolidado: 'true',
  accionistas: Faker.random.words(15),
  participadas: Faker.random.words(15),
  refBanco: Faker.random.words(1),
  opinionEmpresa: Faker.random.words(15),
  opinionSector: Faker.random.words(15),
  conclAuditoria: Faker.random.words(7),
  comenAuditoria: Faker.random.words(7),
  origenBalances: '4',
  fechasCierre1: Faker.random.number(99999),
  fechasCierre2: Faker.random.number(99999),
  fechasCierre3: Faker.random.number(99999),
  mesesBalances1: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  mesesBalances2: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  mesesBalances3: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toLocaleDateString('es-ES', dateProperties).toString(),
  accionistas1: Faker.random.number(99999),
  accionistas2: Faker.random.number(99999),
  accionistas3: Faker.random.number(99999),
  Inmovilizado1: Faker.random.number(99999),
  Inmovilizado2: Faker.random.number(99999),
  Inmovilizado3: Faker.random.number(99999),
  establecimiento1: Faker.random.number(99999),
  establecimiento2: Faker.random.number(99999),
  establecimiento3: Faker.random.number(99999),
  materiales1: Faker.random.number(99999),
  materiales2: Faker.random.number(99999),
  materiales3: Faker.random.number(99999),
  inmateriales1: Faker.random.number(99999),
  inmateriales2: Faker.random.number(99999),
  inmateriales3: Faker.random.number(99999),
  financieras1: Faker.random.number(99999),
  financieras2: Faker.random.number(99999),
  financieras3: Faker.random.number(99999),
  accionesPropias1: Faker.random.number(99999),
  accionesPropias2: Faker.random.number(99999),
  accionesPropias3: Faker.random.number(99999),
  deducciones1: Faker.random.number(99999),
  deducciones2: Faker.random.number(99999),
  deducciones3: Faker.random.number(99999)
}

const detailBalancesNPGCEmpty = {
  origenBalances: '',
  fechasCierre1: '',
  fechasCierre2: '',
  fechasCierre3: '',
  mesesBalances1: '',
  mesesBalances2: '',
  mesesBalances3: '',
  accionistas1: '',
  accionistas2: '',
  accionistas3: '',
  Inmovilizado1: '',
  Inmovilizado2: '',
  Inmovilizado3: '',
  establecimiento1: '',
  establecimiento2: '',
  establecimiento3: '',
  materiales1: '',
  materiales2: '',
  materiales3: '',
  inmateriales1: '',
  inmateriales2: '',
  inmateriales3: '',
  financieras1: '',
  financieras2: '',
  financieras3: '',
  accionesPropias1: '',
  accionesPropias2: '',
  accionesPropias3: '',
  deducciones1: '',
  deducciones2: '',
  deducciones3: ''
}

export {
  detailPetitionDataFaker,
  detailBalancesNPGCEmpty
}
