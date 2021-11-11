import { IBalancesNPGC } from '../BalancesNPGC/types'

interface I18nPetitionRequestForm {
  'PetitionRequestForm:detailTbTitle': string
  'PetitionRequestForm:detailTbName': string
  'PetitionRequestForm:detailTbFiscal': string
  'PetitionRequestForm:detailTbAddress': string
  'PetitionRequestForm:detailTbProvince': string
  'PetitionRequestForm:detailTbPostalCode': string
  'PetitionRequestForm:detailTbPhone': string
  'PetitionRequestForm:detailTbFax': string
  'PetitionRequestForm:detailTbObservations': string
  'PetitionRequestForm:detailBtReturn': string
  'PetitionRequestForm:detailTbConfidencial': string
  'PetitionRequestForm:detailRbYes': string
  'PetitionRequestForm:detailRbNo': string
  'PetitionRequestForm:detailTbAlerta': string
  'PetitionRequestForm:detailTbConsolidado': string
  'PetitionRequestForm:detailTbJuridica': string
  'PetitionRequestForm:detailTbFechaConstitucion': string
  'PetitionRequestForm:detailTbSucursales': string
  'PetitionRequestForm:detailTbEmpleados': string
  'PetitionRequestForm:detailTbCapitalSocial': string
  'PetitionRequestForm:detailTbCapitalDesem': string
  'PetitionRequestForm:detailTbCNAE': string
  'PetitionRequestForm:detailTbTipoProducto': string
  'PetitionRequestForm:detailTbVentasEstimadas': string
  'PetitionRequestForm:detailTbBancos': string
  'PetitionRequestForm:detailTbRefBanco': string
  'PetitionRequestForm:detailTbConcClientes': string
  'PetitionRequestForm:detailTbPrinClientes': string
  'PetitionRequestForm:detailTbPrinProveedores': string
  'PetitionRequestForm:detailTbCompetidores': string
  'PetitionRequestForm:detailTbExportación': string
  'PetitionRequestForm:detailTbAccionistas': string
  'PetitionRequestForm:detailTbParticipadas': string
  'PetitionRequestForm:detailTbOpinionEmpresa': string
  'PetitionRequestForm:detailTbOpinionSector': string
  'PetitionRequestForm:detailTbBalancesNPGC': string
  'PetitionRequestForm:detailTbBalances': string
  'PetitionRequestForm:detailTbConclusionAudit': string
  'PetitionRequestForm:detailTbComentarioAudit': string
}

interface IPetitionRequestForm {
  nombreSujeto: string
  codFiscal: string
  provincia: string
  codPostal: string
  domicilio: string
  numeroTelefono: string
  numeroFax: string
  juridica: string
  fechaConstitucion: string
  sucursales: string
  empleados: string
  capitalSocial: string
  capitalDesembolsado: string
  CNAE: string
  tipoProducto: string
  ventasEstimadas: string
  bancos: string
  refBanco: string
  concClientes: string
  princClientes: string
  princProveedores: string
  competidores: string
  exportacion: string
  paises: string
  confidencial: string
  alerta: string
  consolidado: string
  accionistas: string
  participadas: string
  opinionEmpresa: string
  opinionSector: string
  observaciones: string
  conclAuditoria: string
  comenAuditoria: string
  origenBalances: string
  fechasCierre1: string
  fechasCierre2: string
  fechasCierre3: string
  mesesBalances1: string
  mesesBalances2: string
  mesesBalances3: string
  accionistas1: string
  accionistas2: string
  accionistas3: string
  Inmovilizado1: string
  Inmovilizado2: string
  Inmovilizado3: string
  establecimiento1: string
  establecimiento2: string
  establecimiento3: string
  materiales1: string
  materiales2: string
  materiales3: string
  inmateriales1: string
  inmateriales2: string
  inmateriales3: string
  financieras1: string
  financieras2: string
  financieras3: string
  accionesPropias1: string
  accionesPropias2: string
  accionesPropias3: string
  deducciones1: string
  deducciones2: string
  deducciones3: string
}
interface ISelectElements {
  value: string
  result: string
}

export interface IRequesForm {
  i18n: I18nPetitionRequestForm
  data: IPetitionRequestForm
  formsJuridic: ISelectElements[]
  referencesBank: ISelectElements[]
  commentsFactory: ISelectElements[]
  balanceNPGC: IBalancesNPGC
  handleAccept: (params: any) => void
  handleBack: () => void
  handleCancel: () => void
}
