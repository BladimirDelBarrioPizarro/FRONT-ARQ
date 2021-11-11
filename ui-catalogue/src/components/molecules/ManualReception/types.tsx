import { IElementSelectValue } from '../../atoms/types'

interface Ii18nManualReception {
  'ManualReception:title': string
  'ManualReception:tiporespuesta': string
  'ManualReception:producto': string
  'ManualReception:mediorecepcion': string
  'ManualReception:fecharecepcion': string
  'ManualReception:notas': string
  'ManualReception:aceptar': string
  'ManualReception:alta': string
  'ManualReception:cancelar': string
}

export interface IManualReceptionRequestForm {
  tiporespuesta: string
  producto: string
  mediorecepcion: string
  fecharecepcion: string
  notas: string
}

export interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}

export interface IManualReception {
  i18n: Ii18nManualReception
  data: IManualReceptionRequestForm
  tipoRespuesta: IElementSelectValue[]
  producto: IElementSelectValue[]
  medioRecepcion: IElementSelectValue[]
  handleBack: () => void
  handleAlta: () => void
  handleAccept: (tiporespuesta, product, medio, date, notas) => void
  handleCancel: () => void
}
