export interface IdataIdentificationFR_PT_ITRequestFrom {
  referencia: string
  reffuente: string
  codigoempresa: string
  denominacion: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
}

interface Ii18nIdentificationFR_PT_IT {
  'IdentificationFR_PT_IT:title': string
  'IdentificationFR_PT_IT:referencia': string
  'IdentificationFR_PT_IT:referenciafuente': string
  'IdentificationFR_PT_IT:codigoempresa': string
  'IdentificationFR_PT_IT:denominacion': string
  'IdentificationFR_PT_IT:domicilio': string
  'IdentificationFR_PT_IT:localidad': string
  'IdentificationFR_PT_IT:provincia': string
  'IdentificationFR_PT_IT:codigopostal': string
  'IdentificationFR_PT_IT:pais': string
  'IdentificationFR_PT_IT:vat': string
  'IdentificationFR_PT_IT:actividades': string
  'IdentificationFR_PT_IT:telefono': string
  'IdentificationFR_PT_IT:fax': string
}

export interface IIdentificationFR_PT_IT {
  data: IdataIdentificationFR_PT_ITRequestFrom
  i18n: Ii18nIdentificationFR_PT_IT
}
