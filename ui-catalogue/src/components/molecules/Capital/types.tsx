interface Ii18nCapital {
  'Capital:title': string
  'Capital:capital': string
  'Capital:tipo': string
  'Capital:acciones': string
  'Capital:importe': string
  'Capital:empleados': string
}

export interface ICapitalRequestForm {
  capital1: string
  capital2: string
  tipo: string
  acciones: string
  importe: string
  empleados1: string
  empleados2: string
}

export interface ICapital {
  i18n: Ii18nCapital
  data: ICapitalRequestForm
}
