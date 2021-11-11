interface Ii18nOrganizationType {
  'OrganizationType:title': string
  'OrganizationType:titleSub': string
  'OrganizationType:statusActual': string
  'OrganizationType:fechaStatusActual': string
  'OrganizationType:tipoOrganizacion': string
  'OrganizationType:fechaTomaControl': string
  'OrganizationType:anoConstitucion': string
  'OrganizationType:mes': string
  'OrganizationType:tipoempresa': string
  'OrganizationType:tipofirma': string
}

export interface IOrganizationTypeRequestFrom {
  statusActual: string
  fechaStatusActual: string
  tipoOrganizacion: string
  fechaTomaControl: string
  anoConstitucion: string
  mes: string
  tipoempresa: string
  tipofirma: string
  statusActual2: string
  fechaStatusActual2: string
}

export interface IOrganizationType {
  i18n: Ii18nOrganizationType
  data: IOrganizationTypeRequestFrom
}
