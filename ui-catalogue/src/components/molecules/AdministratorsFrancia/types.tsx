interface Ii18nAdministratorsFrancia {
  'AdministratorsFrancia:title': string
  'AdministratorsFrancia:fechadenacimiento': string
  'AdministratorsFrancia:porcentajedeparticipacion': string
  'AdministratorsFrancia:fechatomacargo': string
  'AdministratorsFrancia:titleSub': string
  'AdministratorsFrancia:tipoasociacion': string
  'AdministratorsFrancia:numeroDun': string
  'AdministratorsFrancia:estatusactual': string
  'AdministratorsFrancia:administradordesde': string
  'AdministratorsFrancia:fechafinalizacion': string
}

export interface IAdministratorsFranciaRequestForm {
  input1: string
  fechadenacimiento: string
  porcentajedeparticipacion: string
  fechatomacargo: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
  input7: string
  input8: string
  input9: string
  input10: string
  input11: string
  input12: string
  input13: string
  input14: string
  input15: string
  input16: string
  tipoasociacion: string
  numeroDun: string
  estatusactual: string
  input17: string
  administradordesde: string
  fechafinalizacion: string
}

export interface IAdministratorsFrancia {
  i18n: Ii18nAdministratorsFrancia
  data: IAdministratorsFranciaRequestForm
}
