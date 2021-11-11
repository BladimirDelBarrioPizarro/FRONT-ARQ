import { IdataTaxCodeRequestForm } from '../TaxCodes/types'
interface Ii18nTaxCodeRef {
  'TaxCode:title': string
  'TaxCode:tipoIdentificacion': string
  'TaxCode:numeroIdentificacion': string
}

export interface ITaxCodesRef {
  i18n: Ii18nTaxCodeRef
  data: IdataTaxCodeRequestForm
}
