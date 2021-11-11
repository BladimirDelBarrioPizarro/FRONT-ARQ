interface Ii18nBouncedChecks {
  'BouncedChecks:title': string
  'BouncedChecks:sinfondo': string
  'BouncedChecks:defectosFormales': string
  'BouncedChecks:totalRechazados': string
  'BouncedChecks:totalAbonados': string
  'BouncedChecks:porcentajeAbonados': string

  'BouncedChecks:cantidad': string
  'BouncedChecks:monto': string
  'BouncedChecks:6meses': string
  'BouncedChecks:7-12meses': string
  'BouncedChecks:13-24meses': string
  'BouncedChecks:+24meses': string
}

export interface IdataBouncedChecksRequestForm {
  sinfondo1: string
  sinfondo2: string
  sinfondo3: string
  sinfondo4: string
  sinfondo5: string
  sinfondo6: string
  sinfondo7: string
  sinfondo8: string
  defectosformales1: string
  defectosformales2: string
  defectosformales3: string
  defectosformales4: string
  defectosformales5: string
  defectosformales6: string
  defectosformales7: string
  defectosformales8: string
  totalrechazados1: string
  totalrechazados2: string
  totalrechazados3: string
  totalrechazados4: string
  totalrechazados5: string
  totalrechazados6: string
  totalrechazados7: string
  totalrechazados8: string
  totalAbonados1: string
  totalAbonados2: string
  totalAbonados3: string
  totalAbonados4: string
  totalAbonados5: string
  totalAbonados6: string
  totalAbonados7: string
  totalAbonados8: string
  porcentajeabonados1: string
  porcentajeabonados2: string
  porcentajeabonados3: string
  porcentajeabonados4: string
  porcentajeabonados5: string
  porcentajeabonados6: string
  porcentajeabonados7: string
  porcentajeabonados8: string
}
export interface IBouncedChecks {
  i18n: Ii18nBouncedChecks
  data: IdataBouncedChecksRequestForm
}
