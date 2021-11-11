import { IdataNonPaymentBadexcugFormRequest } from '../NonPaymentBadexcug/types'
import { IdataOperationCodeBadexcugFormRequest } from '../OperationCodeBadexcug/types'

interface Ii18nProtestsDemandsBadexcug {
  'ProtestsDemandsBadexcug:title': string
  'ProtestsDemandsBadexcug:incidencia': string
  'ProtestsDemandsBadexcug:tipo': string
  'ProtestsDemandsBadexcug:fecha': string
  'ProtestsDemandsBadexcug:incidencias': string
  'ProtestsDemandsBadexcug:importeIncidencias': string
}
export interface IdataProtestsDemandsBadexcugFormRequest {
  incidencia: string
  tipo: string
  fecha: string
  incidencias: string
  importeIncidencias: string
  nonPayment: IdataNonPaymentBadexcugFormRequest
  operationsCode: IdataOperationCodeBadexcugFormRequest[]
}

export interface IProtestsDemandsBadexcug {
  i18n: any
  data: IdataProtestsDemandsBadexcugFormRequest
}
