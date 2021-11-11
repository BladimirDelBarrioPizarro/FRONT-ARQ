interface Ii18nEmployessFrancia {
  'EmployessFrancia:title': string
  'EmployessFrancia:numempleados': string
}

export interface IEmployessFranciaRequestForm {
  nempleados1: string
  nempleados2: string
  nempleados3: string
  nempleados4: string
  nempleados5: string
  nempleados6: string
}

export interface IEmployessFrancia {
  i18n: Ii18nEmployessFrancia
  data: IEmployessFranciaRequestForm
}
