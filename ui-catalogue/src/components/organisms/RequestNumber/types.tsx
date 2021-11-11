interface i18nRequestNumber {
  'RequestNumber:corresponsal:title': string
  'RequestNumber:corresponsal:corresponsal': string
  'RequestNumber:corresponsal:nombre': string
  'RequestNumber:corresponsal:sucursal': string
  'RequestNumber:empresa:title': string
  'RequestNumber:empresa:empresa': string
  'RequestNumber:empresa:cif': string
  'RequestNumber:empresa:nombre': string
  'RequestNumber:empresa:codigopostal': string
  'RequestNumber:empresa:direccion': string
  'RequestNumber:solicitud:title': string
  'RequestNumber:solicitud:peticion': string
  'RequestNumber:solicitud:plaza': string
  'RequestNumber:solicitud:fechapeticion': string
  'RequestNumber:solicitud:modelo': string
  'RequestNumber:solicitud:producto': string
  'RequestNumber:solicitud:importeoperacion': string
  'RequestNumber:solicitud:divoperacion': string
  'RequestNumber:solicitud:importeoperacioncre': string
  'RequestNumber:solicitud:divoperacioncre': string
  'RequestNumber:button:alta': string
  'RequestNumber:button:recepcion': string
  'RequestNumber:button:cancelar': string
}

interface IRequestNumberRequestFrom {
  corresponsal: string
  nombreCorresponsal: string
  sucursal: string
  empresa: string
  cif: string
  nombreEmpresa: string
  codigopostal: string
  direccion: string
  npeticion: string
  plazapago: string
  fechapeticion: string
  modelo: string
  producto: string
  importeoperacion: string
  divoperacion: string
  importeoperacioncre: string
  divoperacioncre: string
}

export interface IRequestNumber {
  i18n: i18nRequestNumber
  data: IRequestNumberRequestFrom
  handleAlta: () => void
  handleRecepcion: () => void
  handleCancel: () => void
}
