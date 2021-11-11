interface Ii18nApplicationDetails {
  'ApplicationDetails:title': string
  'ApplicationDetails:npeticion': string
  'ApplicationDetails:plazapago': string
  'ApplicationDetails:fpeticion': string
  'ApplicationDetails:modelo': string
  'ApplicationDetails:productoobtener': string
  'ApplicationDetails:importeoperacion': string
  'ApplicationDetails:divoperacion': string
  'ApplicationDetails:importeoperacioncre': string
  'ApplicationDetails:divoperacioncre': string
}

export interface IApplicationDetailsRequestForm {
  npeticion: string
  plazapago: string
  fpeticion: string
  modelo: string
  productoobtener: string
  importeoperacion: string
  divoperacion: string
  importeoperacioncre: string
  divoperacioncre: string
}

export interface IApplicationDetails {
  i18n: Ii18nApplicationDetails
  data: IApplicationDetailsRequestForm
}
