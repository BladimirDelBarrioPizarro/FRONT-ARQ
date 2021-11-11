interface Ii18nComercialDesignation {
  'ComercialDesignation:title': string
  'ComercialDesignation:denominacion': string
  'ComercialDesignation:fechainicio': string
}

export interface IComercialDesignationRequestForm {
  denominacion: string
  fechainicio: string
}

export interface IComercialDesignation {
  i18n: Ii18nComercialDesignation
  data: IComercialDesignationRequestForm
}
